import express from "express";
/* Base de Dados
const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    
    },
    {   
        id: 2,
        descricao: "Paisagem deslumbrante ao pôr do sol",
        imagem: "https://source.unsplash.com/random/1920x1080/?sunset,beach",
        categoria: "natureza",
        data: "2023-11-18"
    },
    {   
        id: 3,
        descricao: "Receita deliciosa de bolo de chocolate",
        imagem: "https://www.pexels.com/photo/chocolate-cake-dessert-sweet-1629828",
        categoria: "culinária",
        data: "2023-11-19"
    },
    {   
        id: 4,
        descricao: "Meu novo projeto de artesanato",
        imagem: "https://www.pexels.com/photo/diy-craft-handmade-hobby-270408",
        categoria: "artesanato",
        data: "2023-11-21"
    },
    {   
        id: 5,
        descricao: "Um dia incrível na montanha",
        imagem: "https://source.unsplash.com/random/1920x1080/?mountain,snow",
        categoria: "aventura",
        data: "2023-11-15"
    },
    {   
        id: 6,
        descricao: "Tecnologia do futuro",
        imagem: "https://source.unsplash.com/random/1920x1080/?technology,future",
        categoria: "tecnologia",
        data: "2023-11-22"
    }
]
*/

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando!")
});

function buscarPostPorID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}
//Todo o Array
app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});
// Buscar por id
app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});

