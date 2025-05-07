import { ObjectId } from 'mongodb';
import { getDB } from '../config/db.config.js';
import HashProVider from '../providers/hash.provider.js';

class UserModel {
    async getUserById(userId) {
        try {
        const db = await getDB();
        const user = await db.collection('users').findOne({ _id: new ObjectId(userId) });
        console.log('User from DB by getUserById with id ' + userId + ':', user);
        return user;
        } catch (error) {
        console.error('Error fetching user:', error);
        throw new Error('Failed to fetch user');
        }
    }
    async createUser(userData) {
        try {
        const db = await getDB();
        if (!userData.email || !userData.password) {
            console.error('Email and password are required');
            throw new Error('Email and password are required');
        }
        const existingUser = await db.collection('users').findOne({ email: userData.email });
        if (existingUser) {
            throw new Error('User already exists');
        }
        userData.password = await HashProVider.generateHash(userData.password);
        const result = await db.collection('users').insertOne(userData);
        return { _id: result.insertedId, ...userData };
        } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Failed to create user');
        }
    }
    async getUserByEmail(email) {
        try {
        const db = await getDB();
        const user = await db.collection('users').findOne({ email });
        return user;
        } catch (error) {
        console.error('Error fetching user by email:', error);
        throw new Error('Failed to fetch user by email');
        }
    }
    async updateUser(userId, userData) {
        try {
        const db = await getDB();
        if (userData.password) {
            userData.password = await HashProVider.generateHash(userData.password);
        }
        const result = await db.collection('users').updateOne(
            { _id: new ObjectId(userId) },
            { $set: userData }
        );
        return result;
        } catch (error) {
        console.error('Error updating user:', error);
        throw new Error('Failed to update user');
        }
    }

    async resetPassword(userId, userData) {
        try {
            const db = await getDB();
            userData.password = await HashProVider.generateHash(userData.password);
            const result = await db.collection('users').updateOne(
                { _id: new ObjectId(userId) },
                { $set: userData }
            );
            return result;
            } catch (error) {
            console.error('Error updating user:', error);
            throw new Error('Failed to update user');
        }
    }

    async deleteUser(userId) {
        try {
        const db = await getDB();
        const result = await db.collection('users').deleteOne({ _id: new ObjectId(userId )});
        return result;
        } catch (error) {
        console.error('Error deleting user:', error);
        throw new Error('Failed to delete user');
        }
    }
    async getAllUsers() {
        try {
        const db = await getDB();
        const users = await db.collection('users').find().toArray();
        return users;
        } catch (error) {
        console.error('Error fetching all users:', error);
        throw new Error('Failed to fetch all users');
        }
    }

}

export default new UserModel();