import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment.prod';
import { Dogadjaj } from './dogadjaj';

const baseUrl = environment.url + 'dogadjaj';

@Injectable({
  providedIn: 'root'
})
export class DogadjajService {
  

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

  getDogadjaj(){
    return this.request('get', baseUrl + "/dogadjaj");
  }
  
  createDogadjaj(dogadjaj: Dogadjaj){
    return this.request('post', baseUrl + "/dogadjaj", dogadjaj);
  }

}
