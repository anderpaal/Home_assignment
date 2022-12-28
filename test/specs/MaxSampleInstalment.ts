import HomePage from '../pageobjects/home.page';
import MaxPaymentSchedulePage from '../pageobjects/maxPaymentSchedule.Page';

describe('Should check for error message when income is < 800', () => {

    before('should open max instalment page', async () => {
        await HomePage.open('et/liising#max-payment');
        await HomePage.clickOnAcceptCookieBtn();
    });

    it('should enter net income value', async () => {
        await expect(await MaxPaymentSchedulePage.clickOnNetIncomeField(799)).toBe(true);
    });

    it('should confirm calculator error message"FAIL ON PURPOSE"', async () => {
        await expect(await MaxPaymentSchedulePage.getCalculatorErrorMessage('Maksimaalse kuumakse arvutamiseks on netosissetulek liiga väike.')).toBe(false);//FAILS ON PURPOSE. toBe(true)
    });
})
