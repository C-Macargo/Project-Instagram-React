export default function Post() {

const ConteudoPost = [
    {
        nome: "meowed",
        imagem: "assets/img/meowed.svg",
        conteudo: "assets/img/gato-telefone.svg",
        likenome: "respondeai",
        likeimagem: "assets/img/respondeai.svg",
        likenumero: "101.523"
    },
    {
        nome: "barked",
        imagem: "assets/img/barked.svg",
        conteudo: "assets/img/dog.svg",
        likenome: "adorable_animals",
        likeimagem: "assets/img/adorable_animals.svg",
        likenumero: "99.159"
    },
]

return (
    <div class="posts">
        {ConteudoPost.map(post => < Poste nome={post.nome} 
        imagem={post.imagem} 
        conteudo={post.conteudo} 
        likenome={post.likenome} 
        likeimagem={post.likeimagem}
        likenumero={post.likenumero}
        />)}
    </div>
)


function Poste(props) {
    return (
        <div data-test="post" class="post">
        <div class="topo">
            <div class="usuario">
                <img src={props.imagem} />
                {props.nome}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

        <div class="conteudo">
            <img src={props.conteudo} />
        </div>

        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={props.likeimagem} />
                <div class="texto">
                    Curtido por <strong>{props.likenome}</strong> e <strong>outras {props.likenumero} pessoas</strong>
                </div>
            </div>
        </div>
    </div>
    )
}


}