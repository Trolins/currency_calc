import { Component, Input } from '@angular/core';
import { CurrentData, Exchange, HistoryForm } from '../models/currencyExchange.model';

@Component({
  selector: 'exchange-form',
  templateUrl: './exchange-form.component.html',
  styleUrl: './exchange-form.component.scss'
})
export class ExchangeFormComponent {
  @Input() actualData: CurrentData = new CurrentData;

  currencyList:string[] = ['UAH', 'USD', 'EUR'];
  convertHistory:HistoryForm[] = [];
  b1: Exchange = {
    value: 0,
    type: 'UAH'
  };
  b2: Exchange = {
    value: 0,
    type: 'USD'
  };

  constructor() {}

  convert(b:string) {
    switch (b) {
      case 'b1':    
        this.b2.value = Number(this.convertCurrency(this.b1.value, this.b1.type, this.b2.type));   
        break;
      case 'b2': 
        this.b1.value = Number(this.convertCurrency(this.b2.value, this.b2.type, this.b1.type)); 
        break;
    }   
    
  }
  
  convertCurrency(amount:number, fromCurrency:string, toCurrency:string) { 
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