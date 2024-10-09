import { Request, Response } from "express";
import dataToTry from "../../data/dataToTry";

export default async function getQuestionsByType(req: Request, res: Response) {
  const { type } = req.query;
  const dataFiltered = dataToTry.filter((question) => question.type === Number(type));
  return res.json(dataFiltered)
}
