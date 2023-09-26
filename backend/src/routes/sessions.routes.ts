import { Router } from "express"
import { SessionAuthController } from "../modules/sessions/useCases/sessionAuth/SessionAuthController"

const sessionAuthControlle = new SessionAuthController();

const sessionsRouter = Router();

sessionsRouter.post("/", sessionAuthControlle.handle)

export { sessionsRouter }


