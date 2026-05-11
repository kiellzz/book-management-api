import { z } from "zod";

export const livroSchema = z.object({
  titulo: z.string().min(1, "Título é obrigatório").max(100, "Título muito longo"),
  autor: z.string().min(1, "Autor é obrigatório").max(100, "Nome do autor muito longo"),
  ano: z.number()
    .int("Ano deve ser inteiro")
    .min(1000, "Ano inválido")
    .max(new Date().getFullYear(), "Ano não pode ser no futuro"),
  editora: z.string().min(1, "Editora é obrigatória").max(100, "Nome da editora muito longo"),
});

export type LivroInput = z.infer<typeof livroSchema>;