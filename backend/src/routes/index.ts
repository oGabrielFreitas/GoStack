import {Router} from 'express';
import { userRouter } from './user.routes';
import { sessionsRouter } from './sessions.routes';

const routes = Router();

routes.use("/users", userRouter)
routes.use("/sessions", sessionsRouter)

export { routes };
