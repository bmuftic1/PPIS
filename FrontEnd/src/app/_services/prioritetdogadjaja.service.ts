import { Injectable } from '@angular/core';
import { environment } from '../environment.prod';
import { HttpClient } from '@angular/common/http';
import { PrioritetDogadjaja } from './prioritetdogadjaja';

const baseUrl = environment.url + 'prioritetdogadjaja';


@Injectable({
  providedIn: 'root'
})
export class PrioritetdogadjajaService {

  constructor(private http: HttpClient) { }

  private async request(method: string, url: string, data?: any) {
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body'
    });
    return new Promise<any>((resolve, reject) => {
      result.subscribe(resolve as any, reject as any);
    });
  }

  getPrioritetDogadjaja(){
    return this.request('get', baseUrl + '/prioritetdogadjaja')
  }
  createPrioritetDogadjaja(prioritetDogadjaja: PrioritetDogadjaja){
    return this.request('post', baseUrl + '/prioritetdogadjaja', prioritetDogadjaja)
  }


}
