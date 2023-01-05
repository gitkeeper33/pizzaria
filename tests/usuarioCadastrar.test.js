const { cadastrar } = require('../services/UsuariosServices')
const UsuariosServices = require('../services/UsuariosServices')

let usuarioDeTeste = {
    nome: "Ronaldo",
    email: "ronaldo@ronaldo.com",
    senha: '1234',
    endereco: "Rua do Ronaldo, 157",
    formasDePagamento: []
}

cadastrar(usuarioDeTeste)