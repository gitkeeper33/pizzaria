const { cadastrar } = require('../src/public/js/UsuariosServices')
const UsuariosServices = require('../src/public/js/UsuariosServices')

let usuarioDeTeste = {
    nome: "Ronaldo",
    email: "ronaldo@ronaldo.com",
    senha: '1234',
    endereco: "Rua do Ronaldo, 157",
    formasDePagamento: []
}

cadastrar(usuarioDeTeste)