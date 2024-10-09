import { Request, Response } from "express";
import dataToTry from "../../data/dataToTry";

export default async function getQuestionsByDifficulty(req: Request, res: Response) {
  const { difficulty } = req.query;
  const dataFiltered = dataToTry.filter((question) => question.difficulty === Number(difficulty));
  return res.json(dataFiltered)
}
