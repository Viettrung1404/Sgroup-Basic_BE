import PollModel from '../models/polls.model.js';

export const getAllPolls = async (page, limit) => {
    try {
        return await PollModel.getAllPolls(page, limit);
    } catch (error) {
        console.error('Error getting all polls:', error);
        throw new Error('Failed to get polls');
    }
}

export const getPollById = async (id) => {
    try {
        return await PollModel.getPollById(id);
    } catch (error) {
        console.error(`Error getting poll ${id}:`, error);
        throw new Error('Invalid poll ID or poll not found');
    }
}

export const createPoll = async (pollData, user) => {
    try {
        const result = await PollModel.createPoll(pollData, user);
        if (!result) {
            throw new Error('Poll already exists');
        }
        return { _id: result.insertedId, ...pollData };
    } catch (error) {
        console.error('Error creating poll:', error);
        throw new Error('Failed to create poll');
    }
}

export const updatePoll = async (id, updateData) => {
    try {
        const result = await PollModel.updatePoll(id, updateData);
        if (!result) {
            throw new Error('Poll not found');
        }
        
        return { _id: id, ...updateData };
    } catch (error) {
        console.error(`Error updating poll ${id}:`, error);
        throw new Error(error.message || 'Failed to update poll');
    }
}

export const deletePoll = async (id) => {
    try {
        const result = await PollModel.deletePoll(id);
        if (!result) {
            throw new Error('Poll not found');
        }
        
        return { message: 'Poll deleted successfully' };
    } catch (error) {
        console.error(`Error deleting poll ${id}:`, error);
        throw new Error(error.message || 'Failed to delete poll');
    }
}

export const lockPoll = async (id) => {
    try {
        const result = await PollModel.lockPoll(id);
        if (!result) {
            throw new Error('Poll not found or already locked');
        }
        
        return result;
    } catch (error) {
        console.error(`Error locking poll ${id}:`, error);
        throw new Error(error.message || 'Failed to lock poll');
    }
}

export const unlockPoll = async (id) => {
    try {
        const result = await PollModel.unlockPoll(id);
        if (!result) {
            throw new Error('Poll not found or already unlocked');
        }
        
        return { message: 'Poll unlocked successfully' };
    } catch (error) {
        console.error(`Error unlocking poll ${id}:`, error);
        throw new Error(error.message || 'Failed to unlock poll');
    }
}

export const addOption = async (pollId, optionData) => {
    try {
        const result = await PollModel.addOption(pollId, optionData);
        if (!result) {
            throw new Error('Poll not found or option already exists');
        }
        
        return { message: 'Option added successfully', data: result };
    } catch (error) {
        console.error(`Error adding option to poll ${pollId}:`, error);
        throw new Error(error.message || 'Failed to add option');
    }
}

export const removeOption = async (pollId, optionId) => {
    try {
        const result = await PollModel.removeOption(pollId, optionId);
        if (!result) {
            throw new Error('Poll not found or option not found');
        }
        
        return { message: 'Option removed successfully', data: result };
    } catch (error) {
        console.error(`Error removing option from poll ${pollId}:`, error);
        throw new Error(error.message || 'Failed to remove option');
    }
}

export const votePoll = async (pollId, optionId, user) => {
    try {
        const result = await PollModel.votePoll(pollId, optionId, user);
        if (!result) {
            throw new Error('Poll not found or option not found', 404);
        }
        
        return result;
    } catch (error) {
        console.error(`Error voting on poll ${pollId}:`, error);
        // chuyển lỗi cho controller để xử lý
        throw new Error(error.message || 'Failed to vote on poll', { status: error.options?.status || 500 });
    }
}

export const unvotePoll = async (pollId, optionId, user) => {
    try {
        const result = await PollModel.unvotePoll(pollId, optionId, user);
        if (!result) {
            throw new Error('Poll not found or option not found');
        }
        
        return { message: 'Vote removed successfully', data: result };
    } catch (error) {
        console.error(`Error removing vote from poll ${pollId}:`, error);
        throw new Error(error.message || 'Failed to remove vote from poll');
    }
}