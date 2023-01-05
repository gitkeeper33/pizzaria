const usuarios = require("../databases/usuarios.json")
const fs = require('fs')
const bcrypt = require('bcrypt')

function listar(){

const formatUsuario =  u => {
    return {
        nome: u.nome,
        email: u.email,
        id: u.id
    }
}
    let usuariosFormatados = usuarios.map(formatUsuario)

    console.table()
}

function listarNomes(){
    const retornaNome = usuario => {
        return usuario.nome
    }

    let nomesDosUsuarios = usuarios.map(retornaNome)

    console.table(nomesDosUsuarios)
}

    function salvar(arrayDeUsuarios){
    fs.writeFileSync('./databases/usuarios.json', JSON.stringify(arrayDeUsuarios, null, 4))
}

function cadastrar(objeto){
    let senhaCriptografada = bcrypt.hashSync(objeto.senha, 12)
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

function detalhar(idUsuario){
    
    const usuarioEncontrado = usuarios.find(item => item.id === idUsuario)

    console.log("Nome: " + usuarioEncontrado.nome)
    console.log("E-mail: " + usuarioEncontrado.email)
    console.log("Endereços:")
    console.table(usuarioEncontrado.enderecos)
    console.log("Formas de pagamento:")
    console.table(usuarioEncontrado.formasDePagamento)
}

function remover(idDoUsuarioParaRemover){
    let index = usuarios.findIndex(usuario => usuario.id === idDoUsuarioParaRemover)
    if (index > -1){
        usuarios.splice(index, 1)
    }
    console.log(usuarios)
    salvar(usuarios)
}

function alterar(novosDadosParam, idUsuario){
    const index = usuarios.findIndex(item => item.id === idUsuario)
    if(index !== -1) {
     usuarios[index] = novosDadosParam
    }
    salvar(usuarios)
 }

function addEndereco(novoEndereco, idUsuario){
    const index = usuarios.findIndex(usuario => usuario.id === idUsuario)
    usuarios[index].enderecos.push(novoEndereco)
    salvar(usuarios)
    }

function removerEndereco(posicaoDoEndereco, idUsuario){
    const index = usuarios.findIndex(usuario => usuario.id === idUsuario)
    usuarios[index].enderecos.splice(posicaoDoEndereco, 1)
    salvar(usuarios)
}

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario){
    let index = usuarios.findIndex(usuario => usuario.id === idUsuario)
    usuarios[index].enderecos[posicaoDoEndereco] = novoEndereco
    salvar(usuarios)
}

function addFormaDePagamento(novaFormaDePagamento, idUsuario){
    const index = usuarios.findIndex(usuario => usuario.id === idUsuario)
    usuarios[index].formasDePagamento.push(novaFormaDePagamento)
    salvar(usuarios)
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario){
    const index = usuarios.findIndex(usuario => usuario.id === idUsuario)
    usuarios[index].formasDePagamento.splice(posicaoDaFormaDePagamento, 1)
    salvar(usuarios)
}

function alterarFormaDePagamento(novaFormaDePagamento, posicaoDaFormaDePagamento, idUsuario){
    let index = usuarios.findIndex(usuario => usuario.id === idUsuario)
    usuarios[index].formasDePagamento[posicaoDaFormaDePagamento] = novaFormaDePagamento
    salvar(usuarios)
}

const UsuariosServices = {
    cadastrar,
    listarNomes,
    listar,
    salvar,
    detalhar,
    remover,
    alterar,
    addEndereco,
    removerEndereco,
    alterarEndereco,
    addFormaDePagamento,
    removerFormaDePagamento,
    alterarFormaDePagamento
}

module.exports = UsuariosServices;