import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCurrencyDataService {  
  APIkey = 'YrlUHhhugbzaxUVlOkZiITpHy5cAHJTJ';
  URL = 'https://api.currencybeacon.com/v1/latest';
  APIparams = {
    api_key: this.APIkey,
    base: 'USD',
    symbols: 'UAH,EUR,USD'
  };
    
  constructor(private http: HttpClient) { }

  getCurrentCurrency(): Observable<any> {
    return this.http.get(this.URL, {params:this.APIparams});
  }
}
