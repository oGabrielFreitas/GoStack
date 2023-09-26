import { Request, Response } from "express";
import { UserAuthUseCase } from "./UserAuthUseCase";


export class UserAuthController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const userAuthUseCase = new UserAuthUseCase();


    try {

      const user = await userAuthUseCase.execute({ email , password});

      return res.status(200).json(user);

    } catch (error) {

      return res.status(400).json({ message: error.message });

    }
  }
}
