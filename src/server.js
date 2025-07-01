// Importando o módule do express
    const express = require('express')


    //Importar dos controller
    const cursoController = require('./controller/curso.controller')

    //Criando uma instância do express
    const app = express()


    // Criar uma rota 
    app.get('/cursos', cursoController.listar)
       

    //Iniciando o servidor na porta 3000
    app.listen(3000, function(){
        console.log("Servidor rodando na porta 3000")
    })
