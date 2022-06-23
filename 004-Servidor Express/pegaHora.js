const express = require("express")

const app = express()

const porta = 3002
app.listen(porta, function () {
    console.log(`Servidor rodando na porta ${porta}`);
})




let dia = new Date()
let mes = new Date()
let minuto = new Date()
const hora = new Date()
hora.getTime()
 const agora = new Date(hora)

agora.toLocaleDateString()

now = new Date
document.write ("Hoje é " + now.getDay() + ", " + now.getDate() + " de " + now.getMonth() + " de " + now.getFullYear() )



app.get("/hora", function (req, resp) {

    resp.send(

        `
            <html>
            <head>
                <meta charset="UTF-8">
            </head>
            <body>
               <p>Hora: ${agora}</p>
               
                </html>
            </body>
 

            `



    )
})