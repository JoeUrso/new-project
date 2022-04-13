//TODO You set the main folder at the rootDir in tsconfig, fix if it has issues
import cors from "cors";
import * as dotenv from "dotenv";
import express, { Application, Request, Response } from "express";

const app: Application = express();

// IMPORT FROM ENV
dotenv.config({ path: __dirname + "/.env" });
const port = process.env.PORT || 8080;

// ENABLE CORS
app.use(cors());

// Application routing
app.use("/", (req: Request, res: Response) => {
    res.status(200).send({ data: "Hello from Ornio AS" });
});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
