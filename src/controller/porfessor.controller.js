function listar(request, response) {
    response.send("Listando professores...")
}

function criar(request, response) {
    response.send("Criando professor...")
}

function atualizar(request, response) {
    response.send("Atualizando professor...")
}

function deletar(request, response) {
    response.send("Deletando professor...")
}

module.exports = {
    listar,
    criar,
    atualizar,
    deletar
}
