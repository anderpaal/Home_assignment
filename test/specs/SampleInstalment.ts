import HomePage from '../pageobjects/home.page';

describe('Should enter leasing data as a private person & confirm calculator change', () => {

    before('should open home page', async () => {
        await HomePage.open('et/liising#monthly-payment');
        await HomePage.clickOnAcceptCookieBtn();
    });

    it('should enter monthly instalment data', async () => {
        await HomePage.fillPrivatePersonDataField(20000, 25, 48, 8, 5, 25);
    });

    it('should confirm calculator change', async () => {
        await expect(await HomePage.confirmMonthlyInstalmentValue('221.41')).toBe(true);
    });
})
