import "reflect-metadata"
import * as dotenv from "dotenv";
import { DataSource } from "typeorm"
import { User } from "./entity/User.entity"
import { Movie } from "./entity/Movies.entity"

dotenv.config();
const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, NODE_ENV } = process.env;

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST || "localhost",
    port: parseInt(DB_PORT || "5432"),
    username: DB_USERNAME || "test",
    password: DB_PASSWORD || "test",
    database: DB_DATABASE || "test",
    synchronize: NODE_ENV === "dev" ? true : false,
    logging: NODE_ENV === "dev" ? true : false,
    entities: [User, Movie],
    migrations: [__dirname + "/migration/*.ts"],
    subscribers: [],
})
