
import React from 'react'

export default function Usuariocontent(){

    const [userImage, setUserImage] = React.useState("assets/img/catanacomics.svg");
    const [userName, serUserName] = React.useState("catana");

const UserData = [ 
    {   
        tag: "catanacomics",
    }
]

return (
    <div class="usuario">
        {UserData.map(user => < Usuarioz  tag={user.tag}/>)}
    </div>
)


function TrocarImagem(){
    const newimagelink = prompt("Insira o link de uma imagem") 
    if (newimagelink != false){
    setUserImage(newimagelink);
}
}

function TrocarNome(){
    const newName = prompt("Insira seu nome") 
    serUserName(newName);
}


function Usuarioz(props) {
    return (
        <React.Fragment>
        <img data-test="profile-image" onClick={TrocarImagem} src={userImage} />
        <div class="texto">
                <strong>{props.tag}</strong>
                <span>
                <span data-test="name" > {userName} </span>
                <ion-icon data-test="edit-name" onClick={TrocarNome} name="pencil"></ion-icon>
                </span>
            </div>
        </React.Fragment>
    )
}
}


