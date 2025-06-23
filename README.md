# Testes de Front Web com JS + PlayWright + Cucumber

Este projeto utiliza Playwright + JavaScript + Cucumber para realizar validações de Web

## 📁 Estrutura do Projeto
```
front/
├── .github/
│   └── workflows/
│       └── CI.yml
├── features/
│   ├── step_definitions/
│   │   └── compra.steps.js
│   └── compra.feature
├── pages/
│   ├── carrinhoPage.js
│   ├── checkoutFinalPage.js
│   ├── checkoutPage.js
│   └── lojaPage.js
├── .gitignore
├── cucumber.cjs
├── generateReport.cjs
├── package.json
└── README.md
```

## ⚙️ Requisitos
Certifique-se de ter as seguintes ferramentas instaladas no seu ambiente:


| Item                   | Versão/Requisito                               |
|------------------------|------------------------------------------------|
| Node.js                | 18 LTS ou superior                             |
| Playwright             | ^1.18.0                                        |
| @playwright/test       | ^1.53.1                                        |
| Cucumber               | ^11.3.0 (`@cucumber/cucumber`)                 |
| Cucumber HTML Reporter | ^7.2.0 (`cucumber-html-reporter`)              |
| Allure CLI             | ^2.34.0 (`allure-commandline`)                 |


## ✅ Como Executar os Testes

### 1. Instalação as dependências:

npm install

### 2. Execução de testes:

npx cucumber-js

### 3. Geração de relatorios:

npm run generate-report

---

## 👨‍💻 Autor

Vinicios Virissimo

---