import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";

const createUserController = new CreateUserController();

const userRouter = Router();

userRouter.post("/", createUserController.handle)

export { userRouter };
