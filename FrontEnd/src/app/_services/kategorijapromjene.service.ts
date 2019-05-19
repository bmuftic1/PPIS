import { Injectable } from '@angular/core';
import { environment } from '../environment.prod';
import { HttpClient } from '@angular/common/http';
import { KategorijaPromjene } from './kategorijapromjene';

const baseUrl = environment.url + 'kategorijapromjene';

@Injectable({
  providedIn: 'root'
})
export class KategorijapromjeneService {

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

  getKategorijePromjene(){
    return this.request('get', baseUrl + '/kategorijapromjene')
  }
  
  createKategorijaPromjene(kategorijaPromjene: KategorijaPromjene){
    return this.request('post', baseUrl + '/kategorijapromjene', kategorijaPromjene)
  }

}
