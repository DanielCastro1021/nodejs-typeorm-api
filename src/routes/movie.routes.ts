import * as express from "express";
import { authentification } from "../middleware/authentification";
import { MovieController } from "../controllers/movie.controllers";
import { authorization } from "../middleware/authorization";

const Router = express.Router();

Router.get("/", authentification, MovieController.getAllMovies);
Router.post("/", authentification, MovieController.createMovie);

Router.put(
    "/:id",
    authentification,
    authorization(["admin"]),
    MovieController.updateMovie
);
Router.delete(
    "/:id",
    authentification,
    authorization(["admin"]),
    MovieController.deleteMovie
);
export { Router as movieRouter };