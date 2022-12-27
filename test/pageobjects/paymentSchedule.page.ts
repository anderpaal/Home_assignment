import Page from './page';

class PaymentSchedule extends Page {
    get paymentScheduleText(): Promise<WebdriverIO.Element> {return $('[class="text-center"]'); }

    async confirmPaymentScheduleIsPresent(name: string): Promise<boolean> {
        const paymentSchedule: string = await this.getElementText(await this.paymentScheduleText);
        await console.info('Waiting for payment schedule to be present');

        if (name === paymentSchedule) {
            await console.info('Page contains text: ' + name);
            return true;
        }

        await console.info(`Payment schedule with text: ${name} is not present`);
        return false;
    }
}

export default new PaymentSchedule();
