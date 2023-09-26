import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { UserAuthController } from "../modules/users/useCases/userAuth/UserAuthController";

const createUserController = new CreateUserController();
const userAuthController = new UserAuthController

const userRoutes = Router();

userRoutes.post("/", createUserController.handle)
userRoutes.post("/auth", userAuthController.handle)

export { userRoutes };
