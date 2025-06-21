class LojaPage {
  constructor(page) {
    this.page = page;
    this.loginButton = page.locator('#login-button');
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

export default LojaPage;