function listar(request, response) {
    response.send("Listando alunos...")
}

function criar(request, response) {
    response.send("Criando aluno...")
}

function atualizar(request, response) {
    response.send("Atualizando aluno...")
}

function deletar(request, response) {
    response.send("Deletando aluno...")
}

module.exports = {
    listar,
    criar,
    atualizar,
    deletar
}
