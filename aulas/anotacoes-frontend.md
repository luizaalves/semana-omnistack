#### React

**Babel**: Para os browser entenderem o javascript, converte o código em uma sintaxe mais antiga;

* yarn create react-app frontend ou npx create-react-app frontend (npm);
* yarn start;

**pasta public**: arquivos públicos acessados pelo usuário final, podemos deixar apenas o arquivo index.html; 

* instalar bibliotecas que permite fazer chamadas na api: **yarn add axios**
* React segue uma programação declarativa, nunca determina o que o código precisa fazer. Tem uma  tem um conceito de estados, qualquer informação armazenado dentro de um componente.
  * **useState**: cria estados dentro da aplicação; (retorna um vetor com duas posições)
* Sistema de rotas (mudança de página) feita utilizando a biblioteca: **yarn add react-router-dom**;
* useEffect é uma função que recebe dois parametros: uma função e array de dependencias. 
* **react-router-dom** fornece um componente '***Link***' que serve para criar link que o usuário cria e vai pra outra rota;
* **useMemo** ele fica observando o valor de outra variável e toda vez que ela alterar ele gera um novo valor para alguma variável