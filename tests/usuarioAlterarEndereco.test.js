const usuarios = require("../databases/usuarios.json")
const { alterarEndereco } = require("../services/UsuariosServices")


alterarEndereco(2, "Rua dos Tontos", 4)