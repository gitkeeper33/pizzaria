// importar o express
const express = require("express")
const path = require("path")

// criar o servidor
const app = express()

app.use(express.static(path.join(__dirname, 'src')))

// definir rotas neste servidor

app.get('/usuarios', (req, res)=>{
    console.log('chegou uma requisição')
    return res.send("Permaneça em linha!")
})

app.get('/carrinho', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'views', 'carrinho.html'))
})

app.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'views', 'login.html'))
})

app.get('/criar-pizza', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'views', 'create-pizza.html'))
})

app.get('/seus-enderecos', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'views', 'enderecos.html'))
})

app.get('/404', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'views', 'error.html'))
})

app.get('/home', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'views', 'index.html'))
})

app.get('/lista-pizzas', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'views', 'list-pizza.html'))
})

app.get('/lista-usuarios', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'views', 'list.html'))
})

app.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'views', 'login.html'))
})

app.get('/pedidos', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'views', 'pedidos.html'))
})

app.get('/perfil', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'views', 'perfil.html'))
})

app.get('/pizza', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'views', 'pizza.html'))
})

// por o app no modo aguardando requisição
app.listen(3000)

//localhost:3000/usuarios


