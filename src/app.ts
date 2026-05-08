import "reflect-metadata";
import express from "express";
import livroRoutes from "./routes/livroRoutes";

const app = express();
app.use(express.json());
app.use(livroRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

export default app;