import { database } from "../../database";
import { Request, Response } from "express";
import dataToTry from "../../data/dataToTry";

export default async function getAll(req: Request, res: Response) {
  const { difficulty, type } = req.query;
  console.log('🚀🚀 ~ category:', type)
  console.log('🚀🚀 ~ difficylty:', difficulty)
  return res.json(dataToTry)
  // try {
  //   await db.all("SELECT * FROM Users", (err, data) => {
  //     return res.json(data);
  //   });
  // } catch (error) {
  //   console.log(error);
  // }
}
