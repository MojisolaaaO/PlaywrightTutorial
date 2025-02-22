import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/login'


test('Login test', async ({ page }) => {
    const login = new LoginPage(page); 
    await login.goToLoginPage();
    await login.login('tomsmith', 'SuperSecretPassword!');

    // assertions to verify successful login
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
    await expect(page.locator('.flash.success')).toContainText('You logged into a secure area!');
});