
const http = require("http")

const servidor = http.createServer(function (req, resp) {
    //API Application Programing Interface
    //Rotas = Endpoint
    
    let percetRespA = 10

    let html

    if (req.url == "/") {
        html = `
                <html>
                    <head>
                        <meta charset="UTF-8">
                    </head>
                    <body>
                        <h1> Olá Pessoal!!!</h1>
                        <p>Resposta a: ${percetRespA}</p>
                        </html>
                    </body>
        	 `             
    }else if(req.url == "/li") {

        html = `
            <html>
                <head>
                    <meta charset="UTF-8">
                </head>
                <body>
                    <h1> Meus Livros Fav</h1>                
                </body>
            </html>
        `  
    }

    resp.end(html)
})

servidor.listen(3000)