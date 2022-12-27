import Page from './page';

class MaxPaymentSchedulePage extends Page {
    get netIncomeField(): Promise<WebdriverIO.Element> {return $('#monthly-income'); }
    get calculatorErrorField(): Promise<WebdriverIO.Element> {return $('#max-payment > div.row.calculator > div.col-xs-12.col-sm-4.col-md-3.col-sm-offset-1.small.calculator-error'); }//Ask if it would be possible to add ID

    async clickOnNetIncomeField(value: number): Promise<boolean> {
        await console.info('Waiting for button "Accept cookie"');
        return await this.setValueToElement(await this.netIncomeField, value);
    }

    async getCalculatorErrorMessage(value: string): Promise<boolean>{
        const calcErrorMsg = await this.getElementText(await this.calculatorErrorField);
        await console.info(`Waiting for calculator error message: ${value}`);

        if (value === calcErrorMsg) {
            await console.info(`${calcErrorMsg} is equal to ${value}`);
            return true;
        }

        await console.info(`${calcErrorMsg} is not equal to ${value}`);
        return false;
    }    
}   

export default new MaxPaymentSchedulePage();
