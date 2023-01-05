const usuarios = require("../databases/usuarios.json")
const { alterar } = require("../services/UsuariosServices")

let novosDados = {
    nome: "Novo Nome do Usuário da Silva",
    email: "novo@email-do-usuario.com",
    senha: "nova-senha-sem-criptografar"
}

alterar(novosDados, 4)