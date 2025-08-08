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









