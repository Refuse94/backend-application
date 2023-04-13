import express from "express";
import { addProduct, getProduct, getProducts } from "../controlles/products";

const router = express.Router();

// všetky cesty tu budu pustené v /users
router.get("/", getProducts);

router.get("/:id", getProduct);

router.post("/", addProduct);

export default router;
