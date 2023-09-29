import { Router } from "express";
import { FileUploadedController } from "../modules/files/useCases/fileUpload/FileUploadController";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import multer from 'multer';
import UploadConfig from "../config/UploadConfig";

// Router
const filesRouter = Router();

// Controllers
const fileUploadController = new FileUploadedController();

// Consts
const upload = multer(UploadConfig);

// Middlewares
filesRouter.use(ensureAuthenticated)

// Routes
filesRouter.post("/upload", upload.single('uploaded_file'), fileUploadController.handle)

export { filesRouter }
