// parte usada para obter dados dos campos
var nome = window.document.getElementById("nome")
var valorNome = nome.value.trim();

var descricao = window.document.getElementById("descricao")
var valorDescricao = descricao.value.trim();

var img = window.document.getElementById("img")
var valorImg = descricao.value.trim();

var campos = []
campos.push(nome, valorImg, valorDescricao)
console.log(campos)

//****************** */
// Meta: Refatorar esse codigo para POO, com um classe, e ao clicar no botao
// gerar card, o programa deve instanciar um objeto com os nomes dos campo
// e com os valores 
//****************** */
var enviar = window.document.getElementById("enviar")

// gerador de divs estilizadas com os campos preenchidos no forms
enviar.addEventListener("click", function (nReset) {
    nReset.preventDefault()
    var divCard = document.createElement("div")
    divCard.setAttribute("id", "card")
    divCard.style.border = "10px solid #363944"
    divCard.style.width = "250px"
    divCard.style.height = "400px"
    divCard.style.background = "#BF8737"

    var divNome = document.createElement("div")
    divNome.setAttribute("id", "nome")
    divNome.innerHTML = nome.value
    divNome.style.fontSize = "15px";
    divNome.style.borderTop = "2px solid rgba(255,255,255,.7)"
    divNome.style.borderLeft = "2px solid rgba(255,255,255,.7)"
    divNome.style.borderRight = "2px solid rgba(0,0,0,.5)"
    divNome.style.borderBottom = "2px solid rgba(0,0,0,.5)"
    divNome.style.margin = "7px 7px"
    divNome.style.padding = "4px"

    var nomeIcon = document.createElement("span")
    nomeIcon.setAttribute("id", "symbol")
    nomeIcon.innerHTML = "<img src=\'./img/DARK.png\' width=\'25px\' fontSize=\'5px\' float=\'right\' marginTop=\' -4px\'>"
    // nomeIcon.setAttribute("src", "./img/DARK.png")
    nomeIcon.style.fontSize = "5px"
    nomeIcon.style.float = "right"
    nomeIcon.style.width = "25px"
    nomeIcon.style.marginTop = "-4px"
    divNome.appendChild(nomeIcon)
    divCard.appendChild(divNome)

    var divLevel = document.createElement("div")
    divLevel.setAttribute("id", "level")
    divLevel.innerHTML = "&#9733;&#9733;&#9733;&#9733;&#9733;&#9733;"
    divLevel.style.textAlign = "right"
    divLevel.style.color = "yellow"
    divLevel.margin = "5px 20px"

    divCard.appendChild(divLevel)

    var pic = document.createElement("div")
    pic.setAttribute("id", "pic")
    pic.style.margin = "5px 20px"
    divCard.appendChild(pic)
    //dar append aqui?
    var picImg = document.createElement("img")
    picImg.setAttribute("src", `${img.value}`)
    picImg.style.border = "6px solid #545F7C"
    picImg.style.boxShadow = "2px 2px 2px rgba(0,0,0,.5)"
    picImg.style.width = "98%"
    divCard.appendChild(picImg)

    var divDescription = document.createElement("div")
    divDescription.setAttribute("id", "description")
    divDescription.style.margin = "5px"
    divDescription.style.background = "#DDCCB3"
    divDescription.style.padding = "3px"
    divDescription.style.border = "4px solid #B34930"


    var h2 = document.createElement("h3")
    h2.innerHTML = "[Monstro/Efeito]"
    h2.style.fontVariant = "small-caps"
    h2.style.margin = "0"
    h2.style.fontStyle = "normal"
    divDescription.appendChild(h2)

    var p = document.createElement("p")
    p.innerHTML = `${descricao.value}`
    p.style.fontStyle = "italic"
    p.style.fontSize = "19px"
    p.style.margin = "0"
    divDescription.appendChild(p)

    divCard.appendChild(divDescription)

    var stats = document.createElement("div")
    stats.setAttribute("id", "stats")
    stats.style.marginTop = "20px"
    stats.style.borderTop = "2px solid #000"
    stats.style.textAlign = "right"

    stats.innerHTML = "ATK / 2500  &nbsp;  DEF / 1200"
    // stats.appendChild(pStats)
    divDescription.appendChild(stats)




    // var cImg = document.createElement("IMG")
    // cImg.setAttribute("src", `${img.value}`)
    // // mudar 10 ou 50%
    // cImg.style.width = "10%"
    // cImg.style.height = "10%"
    // divCard.appendChild(cImg)
    document.body.appendChild(divCard)
    //************ */
    //Validações
    if(valorNome == "" && valorDescricao == "" && valorImg == ""){
        window.alert("Por favor, preencha todos os campos")
    }
    if (valorNome > 150)
    window.alert("Utilize menos de 150 caracteres")



})

// Botao que eseta a Pagina e os campos
var reset = window.document.getElementById("reset")

reset.addEventListener("click", function (param) {
    param.preventDefault()
    window.location.reload()
    nome.value = ""
    descricao.value = ""
    img.value = ""
})
// botao que "alerta" com o manual de instruções
var manual = document.getElementById("manual")
manual.addEventListener("click", function(nReset){
    nReset.preventDefault()
    window.alert('Escolha uma imagem no google e clique em "Copiar link da imagem"\n Depois cole em "Url da imagem"')
})
// botao que leva a pagina "time"
var btnTime = document.getElementById("time")
btnTime.addEventListener("click", function(nReset){
    nReset.preventDefault()
    window.location = "./alunos/index.html"
})


