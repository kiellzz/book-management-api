import request from "supertest";
import app from "../app";
import { TestDataSource } from "./test-data-source";

jest.mock("../../data-source", () => ({
  AppDataSource: require("./test-data-source").TestDataSource,
}));

beforeAll(async () => {
  await TestDataSource.initialize();
});

afterAll(async () => {
  await TestDataSource.destroy();
});

describe("API de Livros", () => {
  let livroId: number;

  it("GET /health → deve retornar status ok", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body.status).toBe("ok");
  });

  it("POST /livros → deve criar um livro", async () => {
    const res = await request(app).post("/livros").send({
      titulo: "Dom Casmurro",
      autor: "Machado de Assis",
      ano: 1899,
      editora: "Editora Exemplo",
    });
    expect(res.status).toBe(201);
    expect(res.body.titulo).toBe("Dom Casmurro");
    livroId = res.body.id;
  });

  it("GET /livros → deve retornar lista de livros", async () => {
    const res = await request(app).get("/livros");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("GET /livros/:id → deve retornar o livro criado", async () => {
    const res = await request(app).get(`/livros/${livroId}`);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(livroId);
  });

  it("GET /livros/:id → deve retornar 404 para id inexistente", async () => {
    const res = await request(app).get("/livros/99999");
    expect(res.status).toBe(404);
  });

  it("PUT /livros/:id → deve atualizar o livro", async () => {
    const res = await request(app).put(`/livros/${livroId}`).send({
      titulo: "Dom Casmurro - Atualizado",
      autor: "Machado de Assis",
      ano: 1900,
      editora: "Nova Editora",
    });
    expect(res.status).toBe(200);
    expect(res.body.titulo).toBe("Dom Casmurro - Atualizado");
  });

  it("DELETE /livros/:id → deve deletar o livro", async () => {
    const res = await request(app).delete(`/livros/${livroId}`);
    expect(res.status).toBe(200);
    expect(res.body.mensagem).toBe("Livro deletado com sucesso!");
  });

  it("DELETE /livros/:id → deve retornar 404 após deletado", async () => {
    const res = await request(app).get(`/livros/${livroId}`);
    expect(res.status).toBe(404);
  });
});