let inputNome = document.getElementById('nome')

// console.log(inputNome.getAttribute('placeholder'))

// let div = document.createElement('div')

// div.innerHTML = "Texto adicionado dinamicamente..."

// document.body.appendChild(div)

inputNome.addEventListener('blur', () => {
        console.log("O usuário abandonou o campo")
    })

function verificaCampoDigitado(){
    if(inputNome.value == ''){
        alert("Preencha o campo, preguiçoso!")
    }
}