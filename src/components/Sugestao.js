export default function Sugestao() {

    const SugestaoConteudo = [
        { nome: "bad.vibes.memes", imagem: "assets/img/bad.vibes.memes.svg", razao: "segue você" },
        { nome: "chibirdart", imagem: "assets/img/chibirdart.svg", razao: "segue você" },
        { nome: "razoesparaacreditar", imagem: "assets/img/razoesparaacreditar.svg", razao: "Novo no Instagram" },
        { nome: "adorable_animals", imagem: "assets/img/adorable_animals.svg", razao: "Segue você" },
        { nome: "smallcutecats", imagem: "assets/img/smallcutecats.svg", razao: "Segue você" },
    ]

    return (
        <div class="usuario">
            {SugestaoConteudo.map(usuario => < Usuario nome={usuario.nome} imagem={usuario.imagem} razao={usuario.razao} />)}
        </div>
    )

    function Usuario(props) {
        return (
            <div class="sugestao">
                <div class="usuario">
                    <img src={props.imagem} />
                    <div class="texto">
                        <div class="nome">{props.nome}</div>
                        <div class="razao">{props.razao}</div>
                    </div>
                </div>
                <div class="seguir">Seguir</div>
            </div>
        )
    }
}









