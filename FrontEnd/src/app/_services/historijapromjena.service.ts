import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HistorijaPromjena } from './historijapromjena';
import { environment } from '../environment.prod';

const baseUrl = environment.url + 'historijapromjena'

@Injectable({
  providedIn: 'root'
})
export class HistorijapromjenaService {

  constructor(private http: HttpClient) { }
  
  private async request(method: string, url: string, data?: any){
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body'
    });
    return new Promise<any>((resolve, reject) => {
      result.subscribe(resolve as any, reject as any);
    });
  }

  getHistorijaPromjena(){
    return this.request('get', baseUrl + "/historijapromjena");
  }
  createHistorijaPromjena(historijaPromjena: HistorijaPromjena){
    return this.request('post', baseUrl + "/historijapromjena", historijaPromjena);
  }

}
