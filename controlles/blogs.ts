import { Response, Request } from "express";
import { AppDataSource } from "..";
import { Blog } from "../models/Blog.model";
export const getBlogs = async (req: Request, res: Response) => {
  const blogRepo = AppDataSource.getRepository(Blog);
  const blogs = await blogRepo.find();

  res.send(blogs);
};

export const getBlog = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id); // toto je id na urlke
  const blogRepo = AppDataSource.getRepository(Blog);
  const blogs = await blogRepo.findOne({ where: { id } });
  res.send(blogs);
};

export const addBlog = async (req: Request, res: Response) => {
  const blog = req.body as Omit<Blog, "id">;

  const blogRepo = AppDataSource.getRepository(Blog);

  blogRepo.save(blog);

  res.send(`Blog added to the database! `);
};
