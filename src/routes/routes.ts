import * as express from "express";
import { userRouter } from "./user.routes";
import { movieRouter } from "./movie.routes";

export const routes = express.Router();

routes.use("/users", userRouter);
routes.use("/movies", movieRouter);