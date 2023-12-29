import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCurrencyDataService {  
  APIkey = 'YrlUHhhugbzaxUVlOkZiITpHy5cAHJTJ';
  URL = 'https://api.currencybeacon.com/v1/latest';
    
  constructor(private http: HttpClient) { }

  GetCurrentCurrency(): Observable<any> {
    return this.http.get(this.URL+'?api_key='+this.APIkey+'&base=USD&symbols=UAH,EUR,USD');
  }
}
