import { Response, Request } from "express";
import { AppDataSource } from "..";
import { Products } from "../models/Products.model";

export const getProducts = async (req: Request, res: Response) => {
  const productRepo = AppDataSource.getRepository(Products);
  const products = await productRepo.find();
  console.log("req", req);
  console.log("products", products);

  res.send(products);
};

export const getProduct = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id); // toto je id na urlke
  const productRepo = AppDataSource.getRepository(Products);
  const product = await productRepo.findOne({ where: { id } });
  res.send(product);
};

interface ProductRequest {
  productName: string;
  productPrice: number;
  productCompany: string;
}

export const addProduct = async (req: Request, res: Response) => {
  const products = req.body as ProductRequest;
  console.log("dáta z fw", products);

  const productRepo = AppDataSource.getRepository(Products);

  productRepo.save(fromRequest(products));

  res.send(`Blog added to the database! `);
};

const fromRequest = ({
  productCompany,
  productName,
  productPrice,
}: ProductRequest): Omit<Products, "id"> => ({
  productcompany: productCompany,
  productname: productName,
  productprice: productPrice,
});
