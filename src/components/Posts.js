import Post from "./Post"


let ConteudoPost = 
[
    {
        nome: "meowed",
        imagem: "assets/img/meowed.svg",
        conteudo: "assets/img/gato-telefone.svg",
        likenome: "respondeai",
        likeimagem: "assets/img/respondeai.svg",
        likenumero: "101.523",
        key: "meowed",
    },
    {
        nome: "barked",
        imagem: "assets/img/barked.svg",
        conteudo: "assets/img/dog.svg",
        likenome: "adorable_animals",
        likeimagem: "assets/img/adorable_animals.svg",
        likenumero: "99.159",
        key: "barked",
    },
]




export default function Posts() {
    return (

        
        <div class="posts">
            <Post></Post>
        </div>
    )


}