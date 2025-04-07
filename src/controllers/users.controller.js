import * as usersService from '../services/users.service.js';

export const getAllUsers = async (req, res) => {
    try {
        const users = await usersService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await usersService.getUserById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const createUser = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ message: 'Name is required' });
        }
        const newUser = await usersService.createUser(name);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ message: 'Name is required' });
        }
        const updatedUser = await usersService.updateUser(id, name);
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await usersService.deleteUser(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}