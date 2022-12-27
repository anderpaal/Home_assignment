import HomePage from '../pageobjects/home.page';
import paymentSchedulePage from '../pageobjects/paymentSchedule.page';

describe('Should confirm correct navigation by clicking on "Payment schedule" button', () => {

    before('should open home page', async () => {
        await HomePage.open('et/liising#monthly-payment');
        await HomePage.clickOnAcceptCookieBtn();
    });

    it('should click on "Payment schedule"', async () => {
        await expect(await HomePage.clickOnPaymentScheduleBtn()).toBe(true);
    });

    it(`should confirm user is redirected to payment schedule`, async () => {
        await browser.switchWindow('graafik');
        await expect(await paymentSchedulePage.confirmPaymentScheduleIsPresent('Näidismaksegraafik')).toBe(true);
    });
})
