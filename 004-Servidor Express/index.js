const express = require("express")

const app = express()

const porta = 3004
app.listen(porta, function () {
    console.log(`Servidor rodando na porta ${porta}`);
})

app.get("/", function(req, resp){
     
    resp.send(

            `
            <html>
            <head>
                <meta charset="UTF-8">
            </head>
            <body>
                <p>Resposta Certaaaaaaaaaa !!</p>
                </html>
            </body>
            `
    )
})

app.get("/usuario", function(req, resp){
     
    const users = ['Joao','Ferdi']
    resp.json(users)

})



/*
app.get("/usuarios", function(req, resp){

        
    const user = {
        nome: 'Ferdi',
        cpf: '05081755931'
    }
    resp.json(user)
})*/


app.get("/sobre", function(req, resp){
     
    

})
