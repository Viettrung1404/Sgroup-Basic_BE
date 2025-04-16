import { ObjectId } from 'mongodb';
import { getDB } from '../config/db.config.js';

export const getAllUsers = async () => {
  try {
    const db = await getDB();
    return await db.collection('users').find({}).toArray();
  } catch (error) {
    console.error('Error getting all users:', error);
    throw new Error('Failed to get users');
  }
};

export const getUserById = async (id) => {
  try {
    const db = await getDB();
    return await db.collection('users').findOne({ _id: new ObjectId(id) });
  } catch (error) {
    console.error(`Error getting user ${id}:`, error);
    throw new Error('Invalid user ID or user not found');
  }
};

export const createUser = async (userData) => {
  try {
    const db = await getDB();
    const result = await db.collection('users').insertOne(userData);
    return { _id: result.insertedId, ...userData };
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Failed to create user');
  }
};

export const updateUser = async (id, updateData) => {
  try {
    const db = await getDB();
    const result = await db.collection('users').updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );
    
    if (result.matchedCount === 0) {
      throw new Error('User not found');
    }
    
    return { _id: id, ...updateData };
  } catch (error) {
    console.error(`Error updating user ${id}:`, error);
    throw new Error(error.message || 'Failed to update user');
  }
};

export const deleteUser = async (id) => {
  try {
    const db = await getDB();
    const result = await db.collection('users').deleteOne({ _id: new ObjectId(id) });
    
    if (result.deletedCount === 0) {
      throw new Error('User not found');
    }
    
    return { message: 'User deleted successfully' };
  } catch (error) {
    console.error(`Error deleting user ${id}:`, error);
    throw new Error(error.message || 'Failed to delete user');
  }
};