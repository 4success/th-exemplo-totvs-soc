# Integração de funcionarios ACME

![Coverage](coverage/badge.svg)
## TOTVS x SOC

Esse é um modelo de integração entre o TOTVS e o SOC, utilizando a plataforma de
integração [TunnelHub.io](https://tunnelhub.io).
Nele buscamos os dados no TOTVS via API, tratamos conforme regras de mapeamento e enviamos para o SOC via Webservice
SOAP.

Os detalhes desse projeto vocês podem encontrar em nosso blog!

### Configurações padrão:

* Environment: nodejs14.x
* Memory: 128mb
* Timeout: 30s

### Instruções básicas:

* Instale as dependências usando `npm install` ou `yarn`.
* Toda lógica principal está no arquivo `src/index.ts`.
* Você pode verificar exemplos nos testes, no diretório `__tests__`. Nossos testes são escritos
  com [Jest](https://www.npmjs.com/package/jest).
* Para rodar os testes, utilize `npm run test` ou `yarn run test`.
* Para implatar o seu projeto, é necessário criar um zip com todos os arquivos necessários. Use `npm run build`
  ou `yarn run build` para compilar seus arquivos com webpack e gerar o bundle completo na pasta `dist`.

Normalmente, o seu comando preferido para deploys será:

* `yarn run build && th deploy-automation --env ENVNAME --message "Mensagem de implantação"`
