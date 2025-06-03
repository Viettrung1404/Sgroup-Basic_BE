import * as pollsService from '../services/polls.service.js';

export const getAllPolls = async (req, res) => {
  try {
    let { page, limit } = req.query;

    // Kiểm tra giá trị page và limit
    page = parseInt(page, 10) || 1;
    limit = parseInt(limit, 10) || 10;

    if (page <= 0 || limit <= 0) {
      return res.status(400).json({
        success: false,
        message: "Page and limit must be positive integers",
      });
    }

    const polls = await pollsService.getAllPolls(page, limit);
    res.status(200).json({
      success: true,
      message: "Get all Poll successfully",
      data: polls,
      total: polls.total,
      page: page,
      limit: limit,
    });
  } catch (error) {
    // Lỗi 400
    if (error.message.includes("Page and limit must be positive integers")) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
    // Lỗi 500
    else if (error.message.includes("Failed to get polls")) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
    res.status(500).json({ error: error.message });
  }
}

export const getPollById = async (req, res) => {
  try {
    const pollId = req.params.id;
    const poll = await pollsService.getPollById(pollId);

    if (!poll) {
      return res.status(404).json({
        success: false,
        message: "Poll not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Get Poll successfully",
      data: poll,
    });
  } catch (error) {
    // Lỗi 404
    if (error.message.includes("not found")) {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
    // Lỗi 400
    else if (error.message.includes("Invalid poll ID")) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
    // Lỗi 500
    else if (error.message.includes("Failed to get polls")) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
    res.status(500).json({ error: error.message });
  }
}

export const createPoll = async (req, res) => {
  try {
    const pollData = req.body;
    const user = req.user;
    const newPoll = await pollsService.createPoll(pollData, user);

    res.status(201).json({
      success: true,
      message: "Poll created successfully",
      data: newPoll
    });
  } catch (error) {
    // Lỗi 400
    if (error.message.includes("already exists")) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
    // Lỗi 404
    else if (error.message.includes("not found")) {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
    // Lỗi 500
    else if (error.message.includes("Failed to create poll")) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export const updatePoll = async (req, res) => {
  try {
    const pollId = req.params.id;
    const pollData = req.body;
    const updatedPoll = await pollsService.updatePoll(pollId, pollData);

    if (!updatedPoll) {
      return res.status(404).json({
        success: false,
        message: "Poll not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Poll updated successfully",
      data: updatedPoll,
    });
  } catch (error) {
    // Lỗi 404
    if (error.message.includes("not found")) {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
    res.status(500).json({ error: error.message });
  }
}

export const deletePoll = async (req, res) => {
  try {
    const pollId = req.params.id;
    const deletedPoll = await pollsService.deletePoll(pollId);

    if (!deletedPoll) {
      return res.status(404).json({
        success: false,
        message: "Poll not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Poll deleted successfully",
    });
  } catch (error) {
    // Lỗi 404
    if (error.message.includes("not found")) {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
    res.status(500).json({ error: error.message });
  }
}

export const lockPoll = async (req, res) => {
    try {
        const pollId = req.params.id;
        const lockedPoll = await pollsService.lockPoll(pollId);
    
        if (!lockedPoll) {
        return res.status(404).json({
            success: false,
            message: "Poll not found",
        });
        }
    
        res.status(200).json({
        success: true,
        message: "Poll locked successfully",
        data: lockedPoll,
        });
    } catch (error) {
        // Lỗi 404
        if (error.message.includes("not found")) {
            return res.status(404).json({
                success: false,
                message: error.message,
            });
        }
        // Lỗi 403
        else if (error.message.includes("is locked")) {
            return res.status(403).json({
                success: false,
                message: error.message,
            });
        }
         // Lỗi 500
         else if (error.message.includes("already locked")) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
        res.status(500).json({ error: error.message });
    }
}

export const unlockPoll = async (req, res) => {
    try {
        const pollId = req.params.id;
        const unlockedPoll = await pollsService.unlockPoll(pollId);
    
        if (!unlockedPoll) {
        return res.status(404).json({
            success: false,
            message: "Poll not found",
        });
        }
    
        res.status(200).json({
        success: true,
        message: "Poll unlocked successfully",
        data: unlockedPoll,
        });
    } catch (error) {
        // Lỗi 404
        if (error.message.includes("not found")) {
            return res.status(404).json({
                success: false,
                message: error.message,
            });
        }
        // Lỗi 403
        else if (error.message.includes("is locked")) {
            return res.status(403).json({
                success: false,
                message: error.message,
            });
        }
        res.status(500).json({ error: error.message });
    }
}

export const addOption = async (req, res) => {
    try {
        const pollId = req.params.id;
        const optionData = req.body;
        const updatedPoll = await pollsService.addOption(pollId, optionData);
    
        if (!updatedPoll) {
            return res.status(404).json({
                success: false,
                message: "Poll not found",
            });
        }
    
        res.status(200).json({
        success: true,
        message: "Option added successfully",
        data: updatedPoll,
        });
    } catch (error) {
        // Lỗi 404
        if (error.message.includes("not found")) {
            return res.status(404).json({
                success: false,
                message: error.message,
            });
        }
        res.status(500).json({ error: error.message });
    }
}

export const removeOption = async (req, res) => {
    try {
        const pollId = req.params.id;
        const optionId = req.body.optionId;
        const updatedPoll = await pollsService.removeOption(pollId, optionId);
    
        if (!updatedPoll) {
            return res.status(404).json({
                success: false,
                message: "Poll not found",
            });
        }
    
        res.status(200).json({
        success: true,
        message: "Option removed successfully",
        data: updatedPoll,
        });
    } catch (error) {
        // Lỗi 404
        if (error.message.includes("not found")) {
            return res.status(404).json({
                success: false,
                message: error.message,
            });
        }
        res.status(500).json({ error: error.message });
    }
}

export const votePoll = async (req, res) => {
    try {
        const pollId = req.params.id;
        const user = req.user;
        const optionId = req.body.optionId;

        const voteResult = await pollsService.votePoll(pollId, optionId, user);

        if (!voteResult) {
            return res.status(404).json({
                success: false,
                message: "Poll not found or already voted",
            });
        }

        res.status(200).json({
            success: true,
            message: "Vote recorded successfully",
            data: voteResult,
        });
    } catch (error) {
        // Lỗi 404
        if (error.message.includes("not found")) {
            return res.status(404).json({
                success: false,
                message: error.message,
            });
        }
        // Lỗi 400
        else if (error.message.includes("already voted")) {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }
        // Lỗi 403
        else if (error.message.includes("is locked")) {
            return res.status(403).json({
                success: false,
                message: error.message,
            });
        }
        res.status(500).json({ error: error.message });
    }
}

export const unvotePoll = async (req, res) => {
    try {
        const pollId = req.params.id;
        const user = req.user;
        const optionId = req.body.optionId;

        const unvoteResult = await pollsService.unvotePoll(pollId, optionId, user);

        if (!unvoteResult) {
            return res.status(404).json({
                success: false,
                message: "Poll not found or vote not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Vote removed successfully",
            data: unvoteResult,
        });
    } catch (error) {
        // Lỗi 404
        if (error.message.includes("not found")) {
            return res.status(404).json({
                success: false,
                message: error.message,
            });
        }
        // Lỗi 400
        else if (error.message.includes("not voted")) {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }
        // Lỗi 403
        else if (error.message.includes("is locked")) {
            return res.status(403).json({
                success: false,
                message: error.message,
            });
        }
        res.status(500).json({ error: error.message });
    }
}