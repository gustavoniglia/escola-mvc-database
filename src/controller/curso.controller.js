function listar(request, response){
    response.send("Função responsável pela listagem")
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