# Projeto de Automação de Testes com Cucumber e Playwright

Este projeto utiliza **Cucumber** e **Playwright** para automação de testes de aplicações web. Os testes são estruturados com **BDD (Behavior Driven Development)** e os resultados são gerados usando **HTML Reporter**.

## 📁 Estrutura 
```
project/
├── features/
│   ├── login.feature
│   └── compra.feature
├── step_definitions/
│   ├── login.steps.js
│   └── compra.steps.js
├── pages/
│   ├── lojaPage.js
│   ├── carrinhoPage.js
│   └── checkoutPage.js
│   └── checkoutFinalPage.js
├── cucumber.js
├── generateReport.js
├── package.json
└── README.md
```

## Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas no seu ambiente:

- [Node.js](https://nodejs.org/) versão 14.x ou superior.
- [NPM](https://www.npmjs.com/) (gerenciador de pacotes do Node.js).
- Playwright
- Cucumber 
- HTML Reporter

## ✅Como executar

1.Instalar dependências

npm install

2.Executar testes

npx cucumber-js

3.Gerar relatorios:

npm run generate-report

## 👨‍💻 Autor

Vinicios Virissimo