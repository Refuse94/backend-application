import express from "express";
import { getAuthors } from "../controlles/author";

const router = express.Router();

// všetky cesty tu budu pustené v /users
router.get("/", getAuthors);

export default router;
