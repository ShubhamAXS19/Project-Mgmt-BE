import { Router } from "express";
import { search } from "../controllers/search.Controllers";

const router = Router();

router.get("/", search);

export default router;
