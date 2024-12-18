import express from "express";
import { listaPosts, postarNovoPost } from "../controllers/postsController.js";

const routes = (app) => {
    // Permite que o Express analise corpos de requisições em formato JSON.
    app.use(express.json());
    // Rota para obter todos os posts.
    app.get("/posts", listaPosts);
    // Rota para Criar um novo post.
    app.post("/posts, postarNovoPost")
}

export default routes;