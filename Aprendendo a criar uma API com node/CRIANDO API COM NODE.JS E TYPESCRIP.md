**CRIANDO API COM NODE.JS E TYPESCRIPT**



Primeiro precisamos iniciar o projeto ele irá criar o package.json.

Este pacote contém as configurações do projeto como

* nome;
* tipo importação;
* versão;
* scripts;
* arquivo principal;



Utilizaremos uma biblioteca(Framework) para a criação da API chamado **EXPRESS**, Esse framework irá nos ajudar a desenvolver a API com menos complexidade.



Utilizaremos também o **TypeScript** que é o suporte a tipagem para javaScript.

**código: npm add -D typescript** (-D significa que essa dependência será instalada somente para desenvolvimento não será inserida na compilação).



Como utilizaremos o TypeScript todos os arquivos gerados serão no formato .ts, porém o express não foi feito para ser utilizado com TypeScript. Para resolvermos esse problemas precisaremos instalar a integração do express para o typeScript.

**código: npm add @types/express**



Para converter o código typeScript para javaScript precisaremos baixar o TSL para fazer essa conversão.

**código: npm add ts-node-dev**



Essa dependência converte automaticamente código .js para .ts, **não indicado para produção!**.



**NOMENCLATURA DE PASTAS**

**src ->** pasta raiz do nosso projeto.

**server ->** pasta que conterá todos os arquivos do nosso servidor.



Para rodar o arquivo index.ts que é o arquivo principal da nossa aplicação, você precisa rodar utilizando a dependência que colocamos no projeto para converter o código.

**Código: npm ts-node-dev ./src/index.ts**



**\[OPCIONAL!!!]**

Você pode baixar também o ESlint, o ESlint serve para auxiliar os programadores a formatar o código conforme ele quer ou o grupo tenha decidido, exemplo se o grupo decidiu que precisa colocar ';' no final de cada linhas ou função, você baixa o ESlint e toda vez que você esquecer de colocar ele irá avisar. Pode configura-lo da forma que quiser.

**código: npm init @eslint/config@latest**

**Configurando o servidor para ler os bodys como Json**
Quando o usuário envia uma requisição se for do tipo POST provavelmente o servidor irá esperar que o usuario tenha enviado no corpo da requisição alguma informação. E como você queira receber esses dados como um Json, você precisa criar um Middleware que irá converter todos os dados para um Json.

o middleware precisa ser criado para o servidor.
(no arquivo de configuração do seu servidor) -> *server.use(express.json());*

Assim o servidor irá converter todos os dados recebidos em Json.

**Recebendo parametros na URL /:nome**
Para receber um parametro na URL você precisa indicar na criação da rota como esse parametro precisa ser enviado, exemplo: "/usuarios/:nome"

Nesse caso você já está dizendo ao servidor que esse endpoint necessita de um parametro na URL chamado "nome". Toda vez que alguem enviar o parametro "/usuario/guilherme", você pode pegar essa informação com o objeto "req" que contém um atributo chamado params, esse atributo guarda todos os parametros enviados na URL.
req.params.{nome do parametro} no caso do exemplo seria "nome" (req.params.nome);

**Como converter o código TS para JS em produção**
Vamos utilizar uma ferramenta chamada 'tsc', ela já é uma ferramenta nativa do typescript que gera automaticamente o código Js (JavaScript).
Você precisa instalar o tsc 
- 'npm install -g typescript';
- tsc --init (Para iniciar o arquivo tsconfig);
- tsc (Gera os arquivos).

**Estruturas de Pastas API**
src| -> Pasta raiz do projeto.
    server| -> Arquivo de config do servidor.
        controllers| -> Arquivos de controladores.
        database| -> Arquivos de configuração do banco de dados.
        routes| -> Arquivos dos nossos roteadores.
        shared| -> Arquivos que são compartilhados por todo projeto.
            services| -> Tudo que é acesso externo.
            middlewares| -> Arquivos das funções middlewares para usarmos antes das requisições.
        
    








