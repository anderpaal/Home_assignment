import HomePage from '../pageobjects/home.page';

let checkURL = "https://www.lhv.ee/et/liising/taotlus" ;

describe('Should confirm correct navigation by clicking on "Apply here" button', () => {

    before('should open home page', async () => {
        await HomePage.open('et/liising#monthly-payment');
        await HomePage.clickOnAcceptCookieBtn();
    });

    it('should click on "Apply here"', async () => {
        await expect(await HomePage.clickOnApplyHereBtn()).toBe(true);
    });

    it(`should confirm user is redirected to ${checkURL}`, async () => {
        await expect(await HomePage.compareUrl(checkURL)).toBe(true);
    });
})

describe('Should navigate to maximum monthly instalment and click on "Apply here" button', () => {

    it('should navigate to maximum monthly instalment & click on "Apply here"', async () => {
        await HomePage.open('et/liising#max-payment');
        await expect(await HomePage.clickOnMaxApplyHereBtn()).toBe(true);
    });

    it(`should confirm user is redirected to ${checkURL}`, async () => {
        await expect(await HomePage.compareUrl(checkURL)).toBe(true);
    });
})
