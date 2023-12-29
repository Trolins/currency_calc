import { Component, Input } from '@angular/core';

@Component({
  selector: 'exchange-form',
  templateUrl: './exchange-form.component.html',
  styleUrl: './exchange-form.component.scss'
})
export class ExchangeFormComponent {
  @Input({ required: true }) actualData!: any;

  currencyList:string[] = ['UAH', 'USD', 'EUR'];
  convertHistory:any[] = [];
  b1: any = {
    type: 'UAH',
    value: 0
  }
  b2: any = {
    type: 'UAH',
    value: 0
  }

  constructor() {}

  convert(b:string) {
    switch (b) {
      case 'b1':    
        this.b2.value = this.convertCurrency(this.b1.value, this.b1.type, this.b2.type);   
        break;
      case 'b2': 
        this.b1.value = this.convertCurrency(this.b2.value, this.b2.type, this.b1.type); 
        break;
    }   
    
  }
  
  convertCurrency(amount:number, fromCurrency:any, toCurrency:any) { 
    const exchangeRate = this.getExchangeRate(fromCurrency, toCurrency); 
    const convertedAmount = exchangeRate * amount;
    let temp = {
      amount: amount,
      fromCurrency: fromCurrency,
      convertedAmount: convertedAmount,
      toCurrency: toCurrency
    }
    this.convertHistory.push(temp);
    return convertedAmount.toFixed(2); 
  } 
   
  getExchangeRate(fromCurrency:string, toCurrency:string) { 
    const exchangeRates = this.actualData.rates;
    return exchangeRates[toCurrency] / exchangeRates[fromCurrency]; 
  } 
}