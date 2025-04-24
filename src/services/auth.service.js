import { ObjectId } from 'mongodb';
import { getDB } from '../config/db.config.js';
import AuthProvider from '../provider/auth.provider.js';

export const registerUser = async (userData) => {
  try {
    const db = await getDB();
    const user = await db.collection('users').findOne({ email: userData.email});
    if (user) {
      throw new Error('User already exists');
    }
    const result = await db.collection('users').insertOne(userData);
    return { _id: result.insertedId, ...userData };
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Failed to create user');
  }
};


export const loginUser = async (userData) => {
  try {
    const db = await getDB();
    const user = await db.collection('users').findOne({ email: userData.email, password: userData.password });
    console.log('User from DB:', user);
    if (!user) {
      throw new Error('Invalid email or password');
    }
    const token = await AuthProvider.encodeToken(user);
    return { user: { _id: user._id, email: user.email }, token };
  } catch (error) {
    console.error('Error log in user:', error);
    throw new Error('Failed to log in user');
  }
};
