const fs = require('fs')
const bcrypt = require('bcrypt')
const usuarios = require('../databases/usuarios.json')

function cadastrarUsuario(objeto) {

    let senhaCriptografada = bcrypt.hashSync(objeto.senha, 10)
    let novoId = usuarios[usuarios.length -1].id + 1
    
    let usuario = {
        id: novoId,
        nome: objeto.nome,
        email: objeto.email,
        senha: senhaCriptografada,
        enderecos: [objeto.endereco],
        formasDePagamento: []
    }

    usuarios.push(usuario)

    fs.writeFileSync('./databases/usuarios.json', JSON.stringify(usuarios, null, 4))
}

let usuarioDeTeste = {
    nome: "Ronaldo",
    email: "ronaldo@ronaldo.com",
    senha: '1234',
    endereco: "Rua do Ronaldo, 157",
    formasDePagamento: []
}

cadastrarUsuario(usuarioDeTeste)