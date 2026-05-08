import { AppDataSource } from "../data-source";
import app from "./app";

AppDataSource.initialize()
  .then(() => {
    console.log("🟢 Banco conectado com sucesso!");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Erro ao conectar no banco:", error);
  });