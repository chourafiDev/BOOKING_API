import express from "express";
import { statistics } from "../../controller/statisticsController.js";
import {
  isAuthontecated,
  isAuthorized,
} from "../../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", isAuthontecated, isAuthorized("admin"), statistics);

export default router;
