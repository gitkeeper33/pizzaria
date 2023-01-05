// importar o express
const express = require("express")
const path = require("path")

// criar o servidor
const servidor = express()

servidor.use(express.static(path.join(__dirname, 'public')))

// definir uma rota neste servidor
// endereço, método, função callback e a ação que o servidor vai realizar quando o servidor chegar
servidor.get('/usuarios', (req, res)=>{
    console.log('chegou uma requisição')
    return res.send("Permaneça em linha!")
})

servidor.get('/carrinho', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'views', 'carrinho.html'))
})

servidor.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'views', 'login.html'))
})

servidor.get('/criar-pizza', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'views', 'create-pizza.html'))
})

servidor.get('/seus-enderecos', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'views', 'enderecos.html'))
})

servidor.get('/404', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'views', 'error.html'))
})

servidor.get('/home', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'views', 'index.html'))
})

servidor.get('/lista-pizzas', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'views', 'list-pizza.html'))
})

servidor.get('/lista-usuarios', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'views', 'list.html'))
})

servidor.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'views', 'login.html'))
})

servidor.get('/pedidos', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'views', 'pedidos.html'))
})

servidor.get('/perfil', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'views', 'perfil.html'))
})

servidor.get('/pizza', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'views', 'pizza.html'))
})

// por o servidor no modo aguardando requisição
servidor.listen(3000)

//localhost:3000/usuarios


