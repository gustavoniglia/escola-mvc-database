// Importando o módule do express
    const express = require('express')


    //Importar dos controller
    const cursoController = require('./controller/curso.controller')
    const alunoController = require("./controller/aluno.controller")
    const professorController = require("./controller/porfessor.controller")

    //Criando uma instância do express
    const app = express()

    //Configurar o ejs templete engine
    app.set('view engine', 'ejs')

    // Configurar as pastas  das views
    app.set('views', './src/views')


    // Criar uma rota de curos
    app.get('/cursos', cursoController.listar)
    app.post('/cadastrar-curso',cursoController.cadastrar)
    app.put('/atualizar-curso',cursoController.atualizar)
    app.delete('/deletar-curso',cursoController.deletar)

    //Rota de Alunos
    app.get('/alunos', alunoController.listar)
    app.post('/criar-aluno',alunoController.criar)
    app.put('/atualizar-alunos',alunoController.atualizar)
    app.delete('deletar-aluno',alunoController.deletar)

    //Rota dos Professores
    app.get('/professor',professorController.listar)
    app.post('/criar-professor',professorController.criar)
    app.put('/atualizar-professor',professorController.atualizar)
    app.delete('deletar-professor',professorController.deletar)

    //Iniciando o servidor na porta 3000
    app.listen(3100, function(){
        console.log("Servidor rodando na porta 3100")
    })
