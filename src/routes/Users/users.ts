import { Router, Request, Response } from "express";
import getAll from "../../controllers/Users/getAll";


export const usersRoute = Router();

usersRoute.route("/").get(getAll);

