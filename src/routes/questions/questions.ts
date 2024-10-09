import { Router, Request, Response } from "express";
import getAll from "../../controllers/questions/getAll";
import getQuestionsByDifficulty from "../../controllers/questions/getQuestionsByDifficulty";
import getQuestionsByType from "../../controllers/questions/getQuestionsByType";


export const questionRoute = Router();

questionRoute.route("/").get(getAll);
questionRoute.route("/byDifficulty").get(getQuestionsByDifficulty);
questionRoute.route("/byType").get(getQuestionsByType);

