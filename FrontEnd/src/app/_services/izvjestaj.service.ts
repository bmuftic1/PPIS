import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';

const baseUrl='http://localhost:3000'
@Injectable({
    providedIn:'root'
})
export class IzvjestajService {
    constructor(private http: HttpClient){}

    private async request(method:string,url:string,data?:any){
        const result=this.http.request(method,url,{
            body:data,
            responseType:'json',
            observe:'body'
        });
        return new Promise<any>((resolve,reject)=>{
            result.subscribe(resolve as any, reject as any);
        });
    }
    brojKorisnika(){
        return this.request('get',baseUrl+'/izvjestaj/brojKorisnika')
    }
    listaKorisnika(){
        return this.request('get',baseUrl+'/izvjestaj/korisnici')
    }
    kategorijaPromjene(){
        return this.request('get',baseUrl+'/izvjestaj/promjenekategorija')
    }
}