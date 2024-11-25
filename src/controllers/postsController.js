import { getTodosPosts } from "../models/postModel.js";

export async function listaPosts(req, res) {
    const posts = await getTodosPosts();
    res.status(200).json(posts); // Retorna os posts em formato JSON com status 200 (sucesso)
}
