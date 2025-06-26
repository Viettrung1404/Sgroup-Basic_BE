import { Router } from "express";
import * as pollController from "../controllers/polls.controller.js";
import { ValidateMiddleware } from "../middlewares/validate.middleware.js";

const router = Router();

router.post("/:id/vote",
    ValidateMiddleware.validateId,
    ValidateMiddleware.validateVote,
    pollController.votePoll
);

router.post("/:id/unvote",
    ValidateMiddleware.validateId,
    ValidateMiddleware.validateVote,
    pollController.unvotePoll
);

export default router;