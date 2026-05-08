import "reflect-metadata";
import { DataSource } from "typeorm";
import { Livro } from "../entities/Livro";

export const TestDataSource = new DataSource({
  type: "sqlite",
  database: ":memory:",
  synchronize: true,
  logging: false,
  entities: [Livro],
});