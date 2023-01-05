const usuarios = require("../databases/usuarios.json")
const { removerFormaDePagamento } = require("../services/UsuariosServices")

removerFormaDePagamento(1, 4)