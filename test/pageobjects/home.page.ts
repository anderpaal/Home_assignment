import Page from './page';

class HomePage extends Page {
    get acceptCookieBtn(): Promise<WebdriverIO.Element> {return $('#acceptPirukas'); }
    get applyHereButton(): Promise<WebdriverIO.Element> {return $('#monthly-payment > div.row.calculator > div.col-xs-12.col-sm-4.col-md-3.col-sm-offset-1.calculator-result > a.btn.btn-dark'); } //Ask if it would be possible to add ID or is there any better way to select element
    get paymentScheduleButton(): Promise<WebdriverIO.Element> {return $('#monthly-payment > div.row.calculator > div.col-xs-12.col-sm-4.col-md-3.col-sm-offset-1.calculator-result > a.arrow.payment-graph-link.margin-top-20'); } //Ask if it would be possible to add ID or is there any better way to select element
    get maxApplyHereButton(): Promise<WebdriverIO.Element> {return $('#max-payment > div.row.calculator > div.col-xs-12.col-sm-4.col-md-3.col-sm-offset-1.calculator-result > a')} //Ask if it would be possible to add ID or is there any better way to select element
    get privatePersonButton(): Promise<WebdriverIO.Element> {return $('label[for="account_type-0"]'); }
    get legalPersonButton(): Promise<WebdriverIO.Element> {return $('label[for="account_type-1"]'); }
    get financialLeaseButton(): Promise<WebdriverIO.Element> {return $('label[for="kap_rent"]'); }
    get operationalLeaseButton(): Promise<WebdriverIO.Element> {return $('label[for="kas_rent"]'); }
    get priceVehicleField(): Promise<WebdriverIO.Element> {return $('#price'); }
    get includesVatButton(): Promise<WebdriverIO.Element> {return $('#vat_included'); }
    get paymentOfVatButton(): Promise<WebdriverIO.Element> {return $('#vat_scheduling'); }
    get downpaymentPercentField (): Promise<WebdriverIO.Element> {return $('#initial_percentage'); }
    get downpaymentEuroField(): Promise<WebdriverIO.Element> {return $('#initial'); }
    get leasingPeriodYearSelection(): Promise<WebdriverIO.Element> {return $('select[name="years"]'); }
    get leasingPeriodMonthSelection(): Promise<WebdriverIO.Element> {return $('select[name="months"]'); }
    get interestField(): Promise<WebdriverIO.Element> {return $('#interest_rate'); }
    get residualValuePercentField(): Promise<WebdriverIO.Element> {return $('#reminder_percentage'); }
    get residualValueEuroField(): Promise<WebdriverIO.Element> {return $('#reminder'); }
    get monthlyInstalmentValue(): Promise<WebdriverIO.Element> {return $('div[class="payment"'); }


    async clickOnAcceptCookieBtn(): Promise<boolean> {
        await console.info('Waiting for button "Accept cookie"');
        return await this.clickElement(await this.acceptCookieBtn, 1000);
    }
    
    async clickOnApplyHereBtn(): Promise<boolean> {
        await console.info('Waiting for button "Apply here"');
        return await this.clickElement(await this.applyHereButton, 1000);
    }

    async clickOnPaymentScheduleBtn(): Promise<boolean> {
        await console.info('Waiting for button "Payment schedule"');
        return await this.clickElement(await this.paymentScheduleButton, 2000);
    }

    async clickOnMaxApplyHereBtn(): Promise<boolean> {
        await console.info('Waiting for button on max payment "Apply here"');
        return await this.clickElement(await this.maxApplyHereButton, 1000);
    }

    async clickOnPrivatePersonBtn(): Promise<boolean> {
        await console.info('Waiting for button "Private person"');
        return await this.clickElement(await this.privatePersonButton, 500);
    }

    async clickOnLegalPersonBtn(): Promise<boolean> {
        await console.info('Waiting for button "Legal person"');
        return await this.clickElement(await this.legalPersonButton, 500);
    }

    async clickOnFinancialLeaseBtn(): Promise<boolean> {
        await console.info('Waiting for button "Financial lease"');
        return await this.clickElement(await this.financialLeaseButton, 500);
    }

    async clickOnOperationalLeaseBtn(): Promise<boolean> {
        await console.info('Waiting for button "Operational lease"');
        return await this.clickElement(await this.operationalLeaseButton, 500);
    }

    async clickOnPriceOfTheVehicleField(amount: number): Promise<boolean> {
        await console.info('Waiting for vehicle price field');
        return await this.setValueToElement(await this.priceVehicleField, amount);
    }

    async clickOnPriceIncludesVatBtn(): Promise<boolean> {
        await console.info('Waiting for button "The price includes VAT"');
        return await this.clickElement(await this.includesVatButton);
    }

    async selectPaymentOfVatBtn(value: number): Promise<boolean> {
        await console.info('Waiting for payment of VAT selection');
        return await this.setValueToElement(await this.paymentOfVatButton, value);
    }

    async clickDownPaymentPercentField(value: number): Promise<boolean> {
        await console.info('Waiting for downpayment percent field');
        return await this.setValueToElement(await this.downpaymentPercentField, value);
    }

    async clickDownPaymentEuroField(value: number): Promise<boolean> {
        await console.info('Waiting for downpayment euro field');
        return await this.setValueToElement(await this.downpaymentEuroField, value);
    }

    async selectLeasingPeriod(years: number, months: number): Promise<void> {
        const selectYearBox = await this.leasingPeriodYearSelection;
        const selectMonthBow = await this.leasingPeriodMonthSelection;
        await console.info('Waiting for leasing period year and month field');

        await selectYearBox.selectByAttribute('value', years);
        await selectMonthBow.selectByAttribute('value', months);
    }

    async selectInterestPeriod(value: number): Promise<boolean> {
        await console.info('Waiting for interest period field');
        return await this.setValueToElement(await this.interestField, value);
    }

    async selectResidualPercentValue(value: number): Promise<boolean> {
        await console.info('Waiting for residual percentage value field');
        return await this.setValueToElement(await this.residualValuePercentField, value);
    }

    async selectResidualEuroValue(value: number): Promise<boolean> {
        await console.info('Waiting for residual euro value');
        return await this.setValueToElement(await this.residualValueEuroField, value);
    }

    async fillPrivatePersonDataField(
    price: number,
    downPaymentPercentage: number,
    leasingPeriodYearValue: number,
    leasingPeriodMonth: number,
    interest: number,
    residualPercentageValue: number): Promise<boolean> {
        await console.info('Setting value to leasing as a private person');
        await this.clickOnPrivatePersonBtn();
        await this.clickOnFinancialLeaseBtn();
        await this.clickOnPriceOfTheVehicleField(price);
        await this.clickDownPaymentPercentField(downPaymentPercentage);
        await this.selectLeasingPeriod(leasingPeriodYearValue, leasingPeriodMonth);
        await this.selectInterestPeriod(interest);
        return await this.selectResidualPercentValue(residualPercentageValue);
    }

    async confirmMonthlyInstalmentValue(value:string): Promise<boolean> {
        const calculatedInstalment: string = await this.getElementText(await this.monthlyInstalmentValue);
        await console.info('Waiting for Monthly instalment value');

        if (value === calculatedInstalment) {
            await console.info('Payment schedule with text: ' + value + 'is present');
            return true;
        }

        await console.info(`Payment schedule with text: ${value} is not present`);
        return false;
    }
}

export default new HomePage();
