// Importando o model de cursos
const { conexao } = require("../config/banco-dados")
const cursoModel = require("../models/curso.model")

async function listar(request, response) {

//Chamar a função listarTodosCursos no model
    //const cursos = await cursoModel.listarTodosCursos()
    const [cursos] = await conexao.execute('SELECT * FROM cursos')

    //listar cursos de bancos de dados
    console.log('cursos', cursos)


    //response.json(cursos)
    response.render('listar-cursos', {cursos})
}


function cadastrar (request, response){
    response.send("Função responsavel por cadastrar um curso")
}
function atualizar (request, responsavel){
    response.send ("Função responsavel por atualizar os cursos")
}

function deletar(request, response){
    response.send("Funçação responsavel por deletar um curso")
}

module.exports = {
    listar,
    cadastrar,
    atualizar,
    deletar

}