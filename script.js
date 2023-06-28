



const enviarNome = document.querySelector("button")

enviarNome.addEventListener('click', () => {
    const input = document.querySelector("input")

    const nome = input.value

    input.value = ""

    const nomeUsuario = document.createElement("p")
    nomeUsuario.innerText = nome

    document.body.appendChild(nomeUsuario)
})

// const paragrafo = document.createElement("p")

// paragrafo.innerText = "isso é um paragrafo"

// document.body.appendChild(paragrafo)

// function clicou(){
//     document.querySelector("#quadrado").innerHTML = "clicou"
// }

// function entrou(){
//     document.querySelector("#quadrado").innerHTML = "entrou"
// }

// function fora(){
//     document.querySelector("#quadrado").innerHTML = "fora"
// }


// function clickMe(){
// console.log("Clicado")
// }

// function focusMe(){
// console.log("Me focaram aqui")
// }

// function blurMe(){
// console.log("Me desfocaram")
// }

// function changeMe(){
// console.log("Fui alterado")
// }

// function overMe(){
// console.log("mouse aqui")
// }


// document.getElementById('exemplo').innerHTML = "<h1>Cleiton</h1>"