import * as express from "express";
import { Application, Request, Response } from "express";
import * as cors from "cors";
import { configDatabaseRoute } from "../routes/configDatabase";
import db from "../data/data";
import { isAuthRoute } from "../routes/isAuth";
import { usersRoute } from "../routes/Users/users";
import { questionRoute } from "../routes/questions/questions";

const app: Application = express();
db.on;

app.use(cors());
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Bienvenue sur l'API paye ta bière");
});

app.use("/user", usersRoute);
app.use("/questions", questionRoute);

export default app;
