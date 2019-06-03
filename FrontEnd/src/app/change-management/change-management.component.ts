import { Component, OnInit,Input } from '@angular/core';
import {Promjena} from '../_services/promjena';
import {PromjeneService } from '../_services/promjene.service';
import {KategorijaPromjene} from '../_services/kategorijapromjene'

@Component({
  selector: 'app-change-management',
  templateUrl: './change-management.component.html',
  styleUrls: ['./change-management.component.css']
})
export class ChangeManagementComponent implements OnInit {
  @Input()MyPromjene:boolean=false;
  @Input()AllPromjene:boolean =false;
  @Input()PromjeneKomitet:boolean =false;
  @Input()PromjeneForMe:boolean =false;

  isCollapsed:boolean =true;
  isNewChangeCollapsed:boolean=true;

  DefaultPromjene:Promjena[];
  ExpandPromjene:Promjena[];

  KategorijePromjene:KategorijaPromjene[];
  selectedKategorija:KategorijaPromjene;
  constructor() {
    this.DefaultPromjene=[];
    this.ExpandPromjene =[];
   }

  ngOnInit() {

    if(this.MyPromjene) this.getPromjeneOfUser(1);
    if(this.AllPromjene) this.getAllPromjene();
    if(this.PromjeneForMe) this.getPromjeneForDev();
    if(this.PromjeneKomitet) this.getPromjeneForCommity();
    this.getAllKategorijePromjene();

  }
  async getPromjeneOfUser(id:number){
    let Promjene = await [new Promjena(),new Promjena(),new Promjena(),new Promjena(),new Promjena()];
    if(Promjene[0]){this.DefaultPromjene.push(Promjene[0]);Promjene.shift()}
    if(Promjene[1]){this.DefaultPromjene.push(Promjene[1]);Promjene.shift();}
    this.ExpandPromjene=Promjene;
  }
  async getAllPromjene(){
    let Promjene = await [new Promjena(),new Promjena(),new Promjena(),new Promjena(),new Promjena()];
    if(Promjene[0]){this.DefaultPromjene.push(Promjene[0]);Promjene.shift()}
    if(Promjene[1]){this.DefaultPromjene.push(Promjene[1]);Promjene.shift();}
    this.ExpandPromjene=Promjene;
  }
  async getPromjeneForDev(){
    let Promjene = await [new Promjena(),new Promjena(),new Promjena(),new Promjena(),new Promjena()];
    if(Promjene[0]){this.DefaultPromjene.push(Promjene[0]);Promjene.shift()}
    if(Promjene[1]){this.DefaultPromjene.push(Promjene[1]);Promjene.shift();}
    this.ExpandPromjene=Promjene;
  }
  async getPromjeneForCommity(){
    let Promjene = await [new Promjena(),new Promjena(),new Promjena(),new Promjena(),new Promjena()];
    if(Promjene[0]){this.DefaultPromjene.push(Promjene[0]);Promjene.shift()}
    if(Promjene[1]){this.DefaultPromjene.push(Promjene[1]);Promjene.shift();}
    this.ExpandPromjene=Promjene;
  }

  async getAllKategorijePromjene(){
    let kategorije = await [new KategorijaPromjene(),new KategorijaPromjene(),]
    this.KategorijePromjene =kategorije;
  }
  submitPromjena(){
    this.isNewChangeCollapsed=!this.isNewChangeCollapsed
  }
  setKategorija(kategorija:any){
    this.selectedKategorija=kategorija;
  }
  async savePromjena(promjena:Promjena){

  }
}
