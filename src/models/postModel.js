import conectarAoBanco from "../config/dbConfig.js"

// Estabelece a conexão com o banco de dados MongoDB usando a string de conexão fornecida como variável de ambiente.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

// Função assíncrona para buscar todos os posts da coleção 'posts' no banco de dados 'Imersao-instabyte'.
export async function getTodosPosts() {
    const db = conexao.db("Imersao-instabyte") // Seleciona o banco de dados
    const colecao = db.collection("posts") // Seleciona a coleção de posts
    return colecao.find().toArray() // Retorna todos os documentos da coleção como um array
}