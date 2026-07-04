import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import UploadController from "../controllers/uploadController.js";

const uploadRouter = express.Router();

uploadRouter.post("/upload", upload.single("image"), UploadController.uploadImage);

export default uploadRouter;