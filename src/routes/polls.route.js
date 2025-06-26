import { Router } from "express";
import * as pollController from "../controllers/polls.controller.js";
import { ValidateMiddleware } from "../middlewares/validate.middleware.js";

const router = Router();
  
router.get("/", 
    pollController.getAllPolls
);

router.get("/:id",
    ValidateMiddleware.validateId,
    pollController.getPollById
);

router.post("/",
    ValidateMiddleware.validateAdmin,
    ValidateMiddleware.validateCreatePoll,
    pollController.createPoll
);

router.put("/:id",
    ValidateMiddleware.validateAdmin,
    ValidateMiddleware.validateId,
    ValidateMiddleware.validateUpdatePoll,
    pollController.updatePoll
);

router.delete("/:id",
    ValidateMiddleware.validateAdmin,
    ValidateMiddleware.validateId,
    pollController.deletePoll
);

router.put("/:id/lock",
    ValidateMiddleware.validateAdmin,
    ValidateMiddleware.validateId,
    pollController.lockPoll
);

router.put("/:id/unlock",
    ValidateMiddleware.validateAdmin,
    ValidateMiddleware.validateId,
    pollController.unlockPoll
);

router.post("/:id/add-option",
    ValidateMiddleware.validateAdmin,
    ValidateMiddleware.validateId,
    ValidateMiddleware.validateCreateOption,
    pollController.addOption
);

router.delete("/:id/remove-option",
    ValidateMiddleware.validateAdmin,
    ValidateMiddleware.validateId,
    ValidateMiddleware.validateRemoveOption,
    pollController.removeOption
);

export default router;
