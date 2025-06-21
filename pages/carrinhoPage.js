class CarrinhoPage {
  constructor(page) {
    this.page = page;
    this.carrinhoItem = page.locator('.inventory_item');
    this.checkoutButton = page.locator('.checkout_button');
  }

  async goToCheckout() {
    await this.checkoutButton.click();
  }
}

export default CarrinhoPage;