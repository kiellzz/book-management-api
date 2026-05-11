import { Request, Response } from "express";
import { LivroRepository } from "../repositories/LivroRepository";
import { livroSchema } from "../schemas/livroSchema";

export class LivroController {
  async criar(req: Request, res: Response) {
    const result = livroSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({ erros: result.error.flatten().fieldErrors });
    }

    try {
      const livro = LivroRepository.create(result.data);
      await LivroRepository.save(livro);
      return res.status(201).json(livro);
    } catch (error) {
      return res.status(500).json({ erro: "Erro ao criar livro." });
    }
  }

  async listarTodos(req: Request, res: Response) {
    const livros = await LivroRepository.find();
    return res.json(livros);
  }

  async buscarPorId(req: Request, res: Response) {
    const { id } = req.params;
    const livro = await LivroRepository.findOneBy({ id: Number(id) });

    if (!livro) {
      return res.status(404).json({ erro: "Livro não encontrado." });
    }

    return res.json(livro);
  }

  async atualizar(req: Request, res: Response) {
    const { id } = req.params;

    const result = livroSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({ erros: result.error.flatten().fieldErrors });
    }

    const livro = await LivroRepository.findOneBy({ id: Number(id) });

    if (!livro) {
      return res.status(404).json({ erro: "Livro não encontrado." });
    }

    livro.titulo = result.data.titulo;
    livro.autor = result.data.autor;
    livro.ano = result.data.ano;
    livro.editora = result.data.editora;

    await LivroRepository.save(livro);

    return res.json(livro);
  }

  async deletar(req: Request, res: Response) {
    const { id } = req.params;

    const livro = await LivroRepository.findOneBy({ id: Number(id) });

    if (!livro) {
      return res.status(404).json({ erro: "Livro não encontrado." });
    }

    await LivroRepository.remove(livro);

    return res.json({ mensagem: "Livro deletado com sucesso!" });
  }
}