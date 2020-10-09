
/*
node => permite rodar javascript pelo lado do servidor (backend);
    serve também para criar o projeto em react native e react (frontend) 
    instalar dependencias.
yarn e npm => instalação de bibliotecas de terceiros.
express => primeira dependencia adicionada no projeto;
    acelera a construção da criação do projeto;
    um mini framework para não ter que recriar a roda;
    ajuda a ter a definição de rotas.
nodemom => segunda dependencia externa;
    para o servidor reiniciar sozinho;
    apenas no ambiente de desenvolvimento;


*/

//importar uma dependencia externa;
const express = require('express');

const app = express();

app.post('/users', (req,res)=>{
    return res.json({message:'Hello World.'});
});
 
//ouvindo no localhost na porta 3333
app.listen(3333);