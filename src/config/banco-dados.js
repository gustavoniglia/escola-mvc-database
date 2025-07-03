//importar o banco de dados MySQL para se conectar ao banco dos dados MySQL
const mysql = require('mysql2/promise')

//Configuração da conexão com o banco de dados
const conexao = mysql.createConnection({
    host: 'localhost', //Endereço do servidor
    user: 'root', //Usuário do banco de cados
    password: 'root', //Senha do banco de dados
    database: 'sistema_escolar'  //Nome do banco de dados
})

//Exportar essa conexão para ser utilizada em outros arquivos(model)
module.exports = {
    conexao
}