function somar(){

    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value
    let resultado = document.getElementById('resultado').innerHTML = parseInt(n1)+parseInt(n2)

}

let pragrafo = document.createElement("p")

paragrafo.innerText = "Segunda tem jogo"

document.body.appendChild(paragrafo)


function minhaFuncao(){
    document.getElementById('mdiv').classList.add('classe1','classe2','classe3')
}
function meufuncao(){
    document.getElementById('mdiv').classList.remove('classe1','classe2','classe3')
}