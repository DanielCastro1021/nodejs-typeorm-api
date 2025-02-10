import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import * as dotenv from "dotenv";

dotenv.config();

const { JWT_SECRET = "" } = process.env;

export class Encrypt {

    static async encryptPass(password: string): Promise<string> {
        const saltRounds = 12;
        return await bcrypt.hash(password, saltRounds);
    }

    static comparePassword(hashPassword: string, password: string): boolean {
        return bcrypt.compareSync(password, hashPassword);
    }

    static generateToken(payload: object): string {
        if (!JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined in the environment variables.");
        }
        return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
    }
}
