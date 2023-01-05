// importar o express
const express = require("express")

// criar o servidor
const servidor = express()

// definir uma rota neste servidor
// endereço, método, função callback e a ação que o servidor vai realizar quando o servidor chegar
servidor.get('/usuarios', (req, res)=>{
    console.log('chegou uma requisição')
    return res.send("Permaneça em linha!")
})


// por o servidor no modo aguardando requisição
servidor.listen(3000)

//localhost:3000/usuarios


