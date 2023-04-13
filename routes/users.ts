import express from "express";
import { v4 as uuidv4 } from "uuid";
import {
  addNewUser,
  getUsers,
  getUser,
  deleteUser,
  changeUser,
} from "../controlles/users";

const router = express.Router();

// všetky cesty tu budu pustené v /users
router.get("/", getUsers);
router.post("/", addNewUser);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.patch("/:id", changeUser);

export default router;
