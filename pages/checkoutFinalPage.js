
class CheckoutFinalPage {
  constructor(page) {
    this.page = page;
    this.cartItemList = page.locator('.cart_list');
    this.finishButton = page.locator('#finish');
  }

  async finishPurchase() {
    await this.finishButton.click();
  }

  async isCartVisible() {
    return await this.cartItemList.isVisible();
  }
}

export default CheckoutFinalPage;