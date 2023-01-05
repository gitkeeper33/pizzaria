const usuarios = require("../databases/usuarios.json")
const { alterarFormaDePagamento } = require("../services/UsuariosServices")

alterarFormaDePagamento("Cartão", 0, 4)