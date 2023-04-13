import express from "express";
import { addBlog, getBlog, getBlogs } from "../controlles/blogs";

const router = express.Router();

// všetky cesty tu budu pustené v /users
router.get("/", getBlogs);

router.get("/:id", getBlog);

router.post("/", addBlog);

export default router;
