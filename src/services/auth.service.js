import AuthProvider from '../providers/auth.provider.js';
import HashProvider from '../providers/hash.provider.js';
import UserModel from '../models/users.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import sendEmail from '../providers/email.provider.js';

export const registerUser = async (userData) => {
  try {
    const user = await UserModel.getUserByEmail(userData.email);
    console.log('User from DB:', user);
    if (user) {
      throw new Error('User already exists');
    }
    const result = await UserModel.createUser(userData);
    return { _id: result.insertedId, ...userData };
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};


export const loginUser = async (userData) => {
  try {
    const user = await UserModel.getUserByEmail(userData.email);
    console.log('User from DB in loginUser service:', user);
    console.log('User data:', userData);
    if (!user) {
      throw new Error('User not found');
    }
    console.log('Pass is correct: ', await HashProvider.compareHash(userData.password, user.password));
    console.log('Data pass: ', userData.password, ' DB pass: ', user.password);
    if (!(await HashProvider.compareHash(userData.password, user.password))) {
      throw new Error('Invalid password');
    }
    const token = await AuthProvider.encodeToken(user);
    return { user: { _id: user._id, email: user.email }, token };
  } catch (error) {
    console.error('Error log in user:', error);
    throw error;
  }
};

export const forgotPassword = async (email) => {
  try {
    const user = await UserModel.getUserByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }
    const token = await bcrypt.genSalt(10);
    
    const emailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Reset Password',
      text: `The token to reset your password: ${token}`,
    };
    await sendEmail(emailOptions);
    await UserModel.updateUser(user._id, { resetPasswordToken: token, resetPasswordExpires: Date.now() + 10 * 60 * 1000 });
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

export const resetPassword = async (email, password, token) => {
  try {
    const user = await UserModel.getUserByEmail(email);
    console.log('User resetting pass:', user);
    console.log('Token:', token, ' Email: ', email, ' Password: ', password);
    if (!user) {
      throw new Error('User not found');
    }
    if (user.resetPasswordToken !== token || user.resetPasswordExpires < Date.now()) {
      throw new Error('Invalid or expired token');
    }
    
    await UserModel.resetPassword(user._id, { password: password, resetPasswordToken: null, resetPasswordExpires: null, lastTimePasswordChange: Date.now() });
    console.log("User changed password:", user);
    const emailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Password Reset Confirmation',
      text: 'Your password has been successfully reset.',
    };
    await sendEmail(emailOptions);
  } catch (error) {
    console.error('Error resetting password:', error);
    throw error;
  }
}
