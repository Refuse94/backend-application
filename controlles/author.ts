import { AppDataSource } from "..";
import { Author } from "../models/Author.model";
import { Response, Request } from "express";

export const getAuthors = async (_req: Request, res: Response) => {
  const authors = await AppDataSource.getRepository(Author).find();

  res.send(authors);
};
