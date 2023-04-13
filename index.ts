import express from "express";
import bodyParser from "body-parser";
import usersRouters from "./routes/users";
import cors from "cors";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Blog } from "./models/Blog.model";
import blogsRouter from "./routes/blogs";
import { Author } from "./models/Author.model";
import authorsRouter from "./routes/author";
import productsRouter from "./routes/products";
import { Products } from "./models/Products.model";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "tomas9419",
  database: "postgres",
  entities: [Blog, Author, Products],
  synchronize: false,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Connected to database");

    const app = express();
    const PORT = 5000;

    app.use(bodyParser.json());
    app.use(cors({ credentials: false, origin: "http://localhost:3000" }));

    app.use("/users", usersRouters);
    app.use("/blogs", blogsRouter);
    app.use("/authors", authorsRouter);
    app.use("/products", productsRouter);

    app.get("/", (req, res) => {
      res.send("Hello from Homepage");
    });

    app.listen(PORT, () =>
      console.log(`Server Running on port : http://localhost:${PORT}`)
    );

    // here you can start to work with your database
  })
  .catch((error) => console.log(error));
