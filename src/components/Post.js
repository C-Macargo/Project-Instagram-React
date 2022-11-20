import React from 'react'
export default function Post() {

let ConteudoPost = 
[
    {
        nome: "meowed",
        imagem: "assets/img/meowed.svg",
        conteudo: "assets/img/gato-telefone.svg",
        likenome: "respondeai",
        likeimagem: "assets/img/respondeai.svg",
        likenumero: "300",
        key: "meowed",
    },
    {
        nome: "barked",
        imagem: "assets/img/barked.svg",
        conteudo: "assets/img/dog.svg",
        likenome: "adorable_animals",
        likeimagem: "assets/img/adorable_animals.svg",
        likenumero: "450",
        key: "barked",
    },
]




function Poste(props) {

/*Código para botar e tirar numero de likes*/

const [likenumero, setLikeNumero] = React.useState(props.likenumero);


/*Código para botar e tirar coracão*/
    const [heart, setHeart] = React.useState("heart-outline");
    function CheckMarkHeart(){
        let likenumero2 = Number(props.likenumero) + 1
        const FilledHeart = "heart"
        const UnfilledHeart = "heart-outline"
        setHeart (FilledHeart)
        setLikeNumero (likenumero2)
            if (heart == FilledHeart){
                setHeart (UnfilledHeart)
                setLikeNumero(props.likenumero)
            }
    }
    
    function CheckMarkHeartPicture(){
        let likenumero2 = Number(props.likenumero) + 1
        const FilledHeart = "heart"
        setHeart (FilledHeart)
        setLikeNumero (likenumero2)
    
    }

/*Código para botar e tirar bookmark*/
const [postBookmark, setPostBookmark] = React.useState("bookmark-outline");
function CheckBookmark(){

    const FilledBookmark = "bookmark"
    const UnfilledBookmark = "bookmark-outline"
    setPostBookmark (FilledBookmark)
        if (postBookmark == FilledBookmark){
            setPostBookmark (UnfilledBookmark)
        }
}

    /*Código para props*/
    return (

        <div data-test="post" class="post" key="props.key" name={props.nome}>
        <div class="topo">
            <div class="usuario">
                <img src={props.imagem}/>
                {props.nome}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

        <div class="conteudo">
            <img data-test="post-image"  src={props.conteudo}  onClick={CheckMarkHeartPicture}/>
        </div>

        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon data-test="like-post" onClick={CheckMarkHeart} name={heart}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon data-test="save-post" onClick={CheckBookmark} name={postBookmark}></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={props.likeimagem} />
                <div class="texto">
                    Curtido por <strong>{props.likenome}</strong> e <strong data-test="likes-number">outras {likenumero} pessoas</strong>
                </div>
            </div>
        </div>
    </div>
    )
    
}



/*Código para imprimir no posts*/
return (
    <div class="posts">
        {ConteudoPost.map(post => < Poste nome={post.nome} 
        imagem={post.imagem} 
        conteudo={post.conteudo} 
        likenome={post.likenome} 
        likeimagem={post.likeimagem}
        likenumero={post.likenumero}
        key={post.key}
        />)}
    </div>
)
}