import { Router } from "express";

import { getTeams } from "../controllers/team.Controllers";

const router = Router();

router.get("/", getTeams);

export default router;
