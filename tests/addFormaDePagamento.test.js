const usuarios = require("../databases/usuarios.json")
const { addFormaDePagamento } = require("../services/UsuariosServices")

addFormaDePagamento("Pix", 4)