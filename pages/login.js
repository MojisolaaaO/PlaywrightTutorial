// Export the LoginPage class so it can be imported and used in other files
exports.LoginPage = class LoginPage {

    // Constructor: Initializes the class with the 'page' object and locators
    constructor(page) {
        // Assign the Playwright 'page' object to 'this.page' so it can be used in all methods
        this.page = page;
        this.username_textbox = page.getByLabel('Username');
        this.password_textbox = page.getByLabel('Password');
        this.login_button = page.getByRole('button', { name: 'Login' });
    }

    // Method: Navigates to the login page
    async goToLoginPage() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    // Method: Performs the login action
    async login(username, password) {
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }
};