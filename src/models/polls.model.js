import { ObjectId } from 'mongodb';
import { getDB } from '../config/db.config.js';

class PollModel {
    async getAllPolls(page, limit) {
        if (page <= 0 || limit <= 0) {
            throw new Error('Page and limit must be positive integers');
        }
        try {
            const db = await getDB();
            const polls = await db.collection('polls').find().toArray();
            console.log('Polls from DB:', polls);

            // Phân trang, giới hạn số lượng kết quả trả về
            const startIndex = (page - 1) * limit;
            const endIndex = startIndex + limit;
            const paginatedPolls = polls.slice(startIndex, endIndex);

            // Định dạng lại dữ liệu để trả về
            const formattedPolls = paginatedPolls.map(poll => ({
                id: poll._id.toString(),
                ...poll,
                _id: undefined,
            }));

            // Đổi options thành mảng các đối tượng với id và text
            formattedPolls.forEach(poll => {
                poll.options = poll.options.map(option => ({ id: option.id.toString(), text: option.text }));
            });

            formattedPolls.total = formattedPolls.length;
            return formattedPolls;
        } catch (error) {
            console.error('Error fetching polls:', error);
            throw new Error('Failed to fetch polls');
        }
    }
    async getPollById(id) {
        try {
            const db = await getDB();
            const poll = await db.collection('polls').findOne({ _id: new ObjectId(id) });
            if (!poll) {
                throw new Error('Poll not found');
            }
            const formattedPoll = {
                id: poll._id.toString(),
                ...poll,
            };
            delete formattedPoll._id;
    
            return formattedPoll;
        } catch (error) {
            console.error(`Error fetching poll ${id}:`, error);
            throw new Error('Invalid poll ID or poll not found');
        }
    }
    async createPoll(pollData, user) {
        try {
            // Tạo một object mới cho các tùy chọn
            const options = pollData.options.map(option => ({
                id: new ObjectId(), 
                text: option, 
                votes: 0,
                userVote: [] 
            }));
            // Tạo một đối tượng mới cho Poll
            const newPoll = {
                title: pollData.title,
                description: pollData.description,
                options: options,
                creator: {
                    id: user.id,
                    email: user.email
                },
                isLocked: pollData.isLocked || false,
                createdAt: new Date(),
                expiresAt: pollData.expiresAt ? new Date(pollData.expiresAt) : null,
                totalVotes: 0
            };
            const db = await getDB();
            const result = await db.collection('polls').insertOne(newPoll);
            if (!result.acknowledged) {
                throw new Error('Poll already exists');
            }
            console.log('Poll created successfully:', result);
            return { id: result.insertedId, ...newPoll };
        } catch(error) {
            console.error('Error creating poll:', error);
            throw new Error('Failed to create poll');
        }
    }
    async updatePoll(id, updateData) {
        try {
            const db = await getDB();
            const result = await db.collection('polls').updateOne(
                { _id: new ObjectId(id) },
                { $set: updateData }
            );
            if (result.matchedCount === 0) {
                throw new Error('Poll not found');
            }
            const updatedPoll = await db.collection('polls').findOne({ _id: new ObjectId(id) });
            return updatedPoll;
        } catch (error) {
            console.error(`Error updating poll ${id}:`, error);
            throw new Error(error.message || 'Failed to update poll');
        }
    }
    async deletePoll(id) {
        try {
            const db = await getDB();
            const result = await db.collection('polls').deleteOne({ _id: new ObjectId(id) });
            if (result.deletedCount === 0) {
                throw new Error('Poll not found');
            }
            return { message: 'Poll deleted successfully' };
        } catch (error) {
            console.error(`Error deleting poll ${id}:`, error);
            throw new Error(error.message || 'Failed to delete poll');
        }
    }
    async lockPoll(id) {
        try {
            const db = await getDB();
            const result = await db.collection('polls').updateOne(
                { _id: new ObjectId(id) },
                { $set: { isLocked: true } }
            );
            if (result.matchedCount === 0) {
                throw new Error('Poll not found or already locked');
            }
            const updatedPoll = await db.collection('polls').findOne({ _id: new ObjectId(id) });
            return updatedPoll;
        } catch (error) {
            console.error(`Error locking poll ${id}:`, error);
            throw new Error(error.message || 'Failed to lock poll');
        }
    }
    async unlockPoll(id) {
        try {
            const db = await getDB();
            const result = await db.collection('polls').updateOne(
                { _id: new ObjectId(id) },
                { $set: { isLocked: false } }
            );
            if (result.matchedCount === 0) {
                throw new Error('Poll not found or already unlocked');
            }
            return { message: 'Poll unlocked successfully' };
        } catch (error) {
            console.error(`Error unlocking poll ${id}:`, error);
            throw new Error(error.message || 'Failed to unlock poll');
        }
    }
    async addOption(pollId, optionText) {
        try {
            const db = await getDB();
            const option = {
                id: new ObjectId(),
                text: optionText,
                votes: 0,
                userVote: []
            };
            const result = await db.collection('polls').updateOne(
                { _id: new ObjectId(pollId) },
                { $push: { options: option } }
            );
            if (result.matchedCount === 0) {
                throw new Error('Poll not found');
            }
            return { id: option.id.toString(), ...option };
        } catch (error) {
            console.error(`Error adding option to poll ${pollId}:`, error);
            throw new Error('Failed to add option to poll');
        }
    }
    async removeOption(pollId, optionId) {
        try {
            const db = await getDB();
            const result = await db.collection('polls').updateOne(
                { _id: new ObjectId(pollId) },
                { $pull: { options: { id: new ObjectId(optionId) } } }
            );
            if (result.matchedCount === 0) {
                throw new Error('Poll not found');
            }
            return { message: 'Option removed successfully' };
        } catch (error) {
            console.error(`Error removing option from poll ${pollId}:`, error);
            throw new Error('Failed to remove option from poll');
        }
    }
    async votePoll(pollId, optionId, user) {
        try {
            const db = await getDB();
            const poll = await db.collection('polls').findOne({ _id: new ObjectId(pollId) });
            if (!poll) {
                throw new Error('Poll not found');
            }

            const option = poll.options.find(opt => opt.id.toString() === optionId);
            if (!option) {
                throw new Error('Option not found');
            }

            if (poll.isLocked) {
                throw new Error('Poll is locked, cannot vote');
            }

            // Kiểm tra nếu người dùng đã bỏ phiếu cho tùy chọn này
            if (option.userVote.some(voted => voted.id === user.id)) {
                throw new Error('User has already voted for this option');
            }

            // Cập nhật số phiếu và người đã bỏ phiếu
            await db.collection('polls').updateOne(
                { _id: new ObjectId(pollId), 'options.id': new ObjectId(optionId) },
                {
                    $inc: { 'options.$.votes': 1, totalVotes: 1 },
                    $push: { 'options.$.userVote': { id: user.id, email: user.email } }
                }
            );

            // Trả về kết quả cập nhật
            const updatedPoll = await this.getPollById(pollId);
            return updatedPoll;

        } catch (error) {
            console.error(`Error voting on poll ${pollId}:`, error);
            throw new Error(error.message || 'Failed to vote on poll');
        }
    }
    async unvotePoll(pollId, optionId, user) {
        try {
            const db = await getDB();
            const poll = await db.collection('polls').findOne({ _id: new ObjectId(pollId) });
            if (!poll) {
                throw new Error('Poll not found');
            }

            const option = poll.options.find(opt => opt.id.toString() === optionId);
            if (!option) {
                throw new Error('Option not found');
            }

            if (poll.isLocked) {
                throw new Error('Poll is locked, cannot unvote');
            }

            // Kiểm tra nếu người dùng đã bỏ phiếu cho tùy chọn này
            const userVoteIndex = option.userVote.findIndex(voted => voted.id === user.id);
            if (userVoteIndex === -1) {
                throw new Error('User has not voted for this option');
            }

            // Cập nhật số phiếu và loại bỏ người đã bỏ phiếu
            await db.collection('polls').updateOne(
                { _id: new ObjectId(pollId), 'options.id': new ObjectId(optionId) },
                {
                    $inc: { 'options.$.votes': -1, totalVotes: -1 },
                    $pull: { 'options.$.userVote': { id: user.id, email: user.email } }
                }
            );

            // Trả về kết quả cập nhật
            const updatedPoll = await this.getPollById(pollId);
            return updatedPoll;

        } catch (error) {
            console.error(`Error unvoting on poll ${pollId}:`, error);
            throw new Error(error.message || 'Failed to unvote on poll');
        }
    }
}

export default new PollModel();