import { Component, OnInit,Input } from '@angular/core';
import {Promjena} from '../_services/promjena';
import {PromjeneService } from '../_services/promjene.service';
import {KategorijaPromjene} from '../_services/kategorijapromjene'
import {KategorijapromjeneService} from '../_services/kategorijapromjene.service'
import {IzvjestajService}from '../_services/izvjestaj.service'
import { JwtHelperService } from '@auth0/angular-jwt';
import {AuthService} from '../_services/auth.service'

@Component({
  selector: 'app-change-management',
  templateUrl: './change-management.component.html',
  styleUrls: ['./change-management.component.css']
})

export class ChangeManagementComponent implements OnInit {
  @Input()ChangeSettings:any;
  @Input()MyPromjene:boolean=false;
  @Input()AllPromjene:boolean =false;
  @Input()PromjeneKomitet:boolean =false;
  @Input()PromjeneForMe:boolean =false;

  isCollapsed:boolean =true;
  isNewChangeCollapsed:boolean=true;
  

  DefaultPromjene:Promjena[];
  ExpandPromjene:Promjena[];

  user:any;

  KategorijePromjene:KategorijaPromjene[];
  selectedKategorija:KategorijaPromjene;
  constructor(public promjeneService:PromjeneService, public kategorijePromjeneService:KategorijapromjeneService,public izvjestajService:IzvjestajService,public auth:AuthService) {
    this.DefaultPromjene=[];
    this.ExpandPromjene =[];
   }

  ngOnInit() {
    const helper = new JwtHelperService();
     const decodedToken = helper.decodeToken(this.auth.token)
     this.user=decodedToken;
    if(this.MyPromjene) {this.getPromjeneOfUser(1);console.log('here')}
    if(this.AllPromjene) this.getAllPromjene();
    if(this.PromjeneForMe) this.getPromjeneForDev();
    if(this.PromjeneKomitet) this.getPromjeneForCommity();
    this.getAllKategorijePromjene();

  }
  getPromjene(){
    
  }
  async getPromjeneOfUser(id:number){
    const data =await this.izvjestajService.promjenePrijavio(this.user.userId);
    console.log(data);
    if(data[0]){this.DefaultPromjene.push(data[0]);}
    if(data[1]){this.DefaultPromjene.push(data[1]);}
    this.ExpandPromjene=data;
    this.ExpandPromjene.shift();
    this.ExpandPromjene.shift();
  }
  async getAllPromjene(){
    const data =await this.promjeneService.getPromjene()
    console.log(data);
    if(data[0]){this.DefaultPromjene.push(data[0]);}
    if(data[1]){this.DefaultPromjene.push(data[1]);}
    this.ExpandPromjene=data;
    this.ExpandPromjene.shift();
    this.ExpandPromjene.shift();
  }
  async getPromjeneForDev(){
    const data =await this.izvjestajService.promjeneIzvrsava(this.user.userId)
    console.log(data);
    if(data[0]){this.DefaultPromjene.push(data[0]);}
    if(data[1]){this.DefaultPromjene.push(data[1]);}
    this.ExpandPromjene=data;
    this.ExpandPromjene.shift();
    this.ExpandPromjene.shift();
  }
  async getPromjeneForCommity(){
    const data =await this.izvjestajService.promjeneOdobrava(this.user.userId)
    console.log(data);
    if(data[0]){this.DefaultPromjene.push(data[0]);}
    if(data[1]){this.DefaultPromjene.push(data[1]);}
    this.ExpandPromjene=data;
    this.ExpandPromjene.shift();
    this.ExpandPromjene.shift();
  }

  async getAllKategorijePromjene(){
    const data = await this.kategorijePromjeneService.getKategorijePromjene();
    this.KategorijePromjene =data;
    this.selectedKategorija=this.KategorijePromjene[0]
  }
  submitPromjena(event:any){
    this.isNewChangeCollapsed=!this.isNewChangeCollapsed
    let promjena:Promjena = new Promjena();
    promjena.kategorijaPromjeneId = this.selectedKategorija.id;
    promjena.prijavio=this.user.userId;
    promjena.opis=event.target.opis.value;
    this.savePromjena(promjena);
  }
  setKategorija(kategorija:any){
    this.selectedKategorija=kategorija;
  }
  async savePromjena(promjena:Promjena){
    await this.promjeneService.createPromjena(promjena);
    if(this.MyPromjene) {this.getPromjeneOfUser(1);console.log('here')}
    if(this.AllPromjene) this.getAllPromjene();
    if(this.PromjeneForMe) this.getPromjeneForDev();
    if(this.PromjeneKomitet) this.getPromjeneForCommity();
  }
}
