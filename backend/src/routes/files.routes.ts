import { Router } from "express";
import { FileUploadedController } from "../modules/files/useCases/fileUpload/FileUploadController";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const fileUploadController = new FileUploadedController();

const filesRouter = Router();

filesRouter.use(ensureAuthenticated) // Inserindo o Middleware na rota

filesRouter.post("/upload", fileUploadController.handle)

export { filesRouter }
