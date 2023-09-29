import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";

// Router
const userRouter = Router();

// Controllers
const createUserController = new CreateUserController();

// Consts
// Middlewares

// Routes
userRouter.post("/", createUserController.handle)

export { userRouter };
