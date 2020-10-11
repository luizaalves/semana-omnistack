### Anotações backend

**Node**: permite rodar javascript pelo lado do servidor (backend);

​	serve também para criar o projeto em react native e react (frontend) 

​    	instalar dependencias.

___

**yarn e npm**: instalação de bibliotecas de terceiros.

___

**express**: primeira dependencia adicionada no projeto;

​    	acelera a construção da criação do projeto;

​    	um mini framework para não ter que recriar a roda;

​    	ajuda a ter a definição de rotas.

___

**nodemom**: segunda dependencia externa;

​    	para o servidor reiniciar sozinho;

​    	apenas no ambiente de desenvolvimento;

___

**Routes**

req.query = Acessar query params (para filtros)

req.params = Acessar route params (para edição, delete)

req.body = Acessar corpo da requisição (para criação, edição)

___

**SessionControllers**

Criando uma sessão dentro da minha aplicação, por exemplo login, logout, etc.

index = criando o metodo q retorna uma listagem de sessoes;

show= listar uma unica sessão;

store= criar uma sessão;

update = atualizar uma sessão;

destroy=destruir uma sessão;

___

**Spot**

Criação e listagem do spot, locais para trabalhar dentro das empresas desse usuario;

Não são aceitos no formato JSON por isso foi usado no insomnia o multiForm, temos que deixar claro pro express os formatos que estão sendo utilizados;

A bilbioteca que permite o upload de imagens é o ***multer***

