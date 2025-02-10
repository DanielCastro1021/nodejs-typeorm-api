import "reflect-metadata";
import * as express from "express";
import * as dotenv from "dotenv";
import { AppDataSource } from "./data-source";
import { Request, Response } from "express";
import { routes } from "./routes/routes";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const { PORT = 3000 } = process.env;
const app = express();


app.use(express.json());
app.use(errorHandler);
app.use("/api/v1/", routes);
app.get("/", (req: Request, res: Response) => res.status(505).json({ message: "Bad Request" }));



AppDataSource.initialize()
    .then(async () => {
        app.listen(PORT, () => {
            console.log("Server is running on http://localhost:" + PORT);
        });
        console.log("Data Source has been initialized!");
    })
    .catch((error) => console.log(error));
