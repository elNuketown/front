import { Before, After, Given, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import CheckoutPage from '../../pages/checkoutPage.js';
import CheckoutFinalPage from '../../pages/checkoutFinalPage.js';
import LojaPage from '../../pages/lojaPage.js';
import CarrinhoPage from '../../pages/carrinhoPage.js';
import { expect } from '@playwright/test';

let browser;
let context;
let page;
let lojaPage;
let carrinhoPage;
let checkoutPage;
let checkoutFinalPage;

Before(async () => {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();

  lojaPage = new LojaPage(page);
  carrinhoPage = new CarrinhoPage(page);
  checkoutPage = new CheckoutPage(page);
  checkoutFinalPage = new CheckoutFinalPage(page);
});

After(async () => {
  await browser.close();
});

Given('que o usuário está na página de login', async () => {
  await page.goto('https://www.saucedemo.com/');
});

When('ele realiza o login com {string} e {string}', async (username, password) => {
  await lojaPage.login(username, password);
});

When('ele adiciona um item ao carrinho', async () => {
  await page.locator('.inventory_item').first().click();
});

When('ele vai para o carrinho', async () => {
  await page.locator('.shopping_cart_link').click();
});

When('ele vai para a página de checkout', async () => {
  await carrinhoPage.goToCheckout();
});

When('ele preenche os dados de checkout com {string}, {string} e {string}', async (firstName, lastName, zipCode) => {
  await checkoutPage.fillCheckoutDetails(firstName, lastName, zipCode);
});

When('ele verifica os itens no checkout', async () => {
  const isCartVisible = await checkoutFinalPage.isCartVisible();
  expect(isCartVisible).toBe(true);
});

When('ele finaliza a compra', async () => {
  await checkoutFinalPage.finishPurchase();
});

Then('ele deve ver a mensagem de agradecimento no checkout', async () => {
  await page.waitForSelector('#checkout_complete_container', { state: 'visible', timeout: 10000 });
  
  const containerLocator = page.locator('#checkout_complete_container');
  await expect(containerLocator).toBeVisible();
});