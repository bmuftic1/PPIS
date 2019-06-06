import { Component, OnInit, Input } from '@angular/core';
import { Dogadjaj } from '_old/src/app/_services/dogadjaj';
import { TipDogadjaja } from '_old/src/app/_services/tipdogadjaja';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.css']
})
export class EventManagementComponent implements OnInit {
 /* @Input()MyGreske:boolean=false;
  @Input()AllGreske:boolean =false;
  @Input()GreskeKomitet:boolean =false;
  @Input()GreskeForMe:boolean =false;*/
  @Input()ChangeSettings:any;
  @Input()MyGreske:boolean=false;
  @Input()AllGreske:boolean =false;
  @Input()GreskeKomitet:boolean =false;
  @Input()GreskeForMe:boolean =false;

  isCollapsed:boolean =true;
  isNewEventCollapsed:boolean=true;

  DefaultGreske:Dogadjaj[];
  ExpandGreske:Dogadjaj[];

  KategorijaGreske:TipDogadjaja[];
  selectedKategorija:TipDogadjaja;

  constructor() {
    this.DefaultGreske=[];
    this.ExpandGreske=[];
   }

  ngOnInit() {
    if(this.MyGreske) this.getGreskeOfUser(1);
    if(this.AllGreske) this.getAllGreske();
    if(this.GreskeKomitet) this.getGreskeForDev();
    if(this.GreskeForMe) this.getGreskeForCommity();
    this.getAllKategorijeGreske();
  }

  async getGreskeOfUser(id:number){
    let Greske = await[new Dogadjaj(), new Dogadjaj(), new Dogadjaj(), new Dogadjaj(), new Dogadjaj()];
    if(Greske[0]) { this.DefaultGreske.push(Greske[0]); Greske.shift();}
    if(Greske[1]) { this.DefaultGreske.push(Greske[1]); Greske.shift();}
    this.ExpandGreske = Greske;
  }
  async getAllGreske(){
    let Greske = await[new Dogadjaj(), new Dogadjaj(), new Dogadjaj(), new Dogadjaj(), new Dogadjaj()];
    if(Greske[0]) { this.DefaultGreske.push(Greske[0]); Greske.shift();}
    if(Greske[1]) { this.DefaultGreske.push(Greske[1]); Greske.shift();}
    this.ExpandGreske = Greske;
  }
  async getGreskeForDev(){
    let Greske = await[new Dogadjaj(), new Dogadjaj(), new Dogadjaj(), new Dogadjaj(), new Dogadjaj()];
    if(Greske[0]) { this.DefaultGreske.push(Greske[0]); Greske.shift();}
    if(Greske[1]) { this.DefaultGreske.push(Greske[1]); Greske.shift();}
    this.ExpandGreske = Greske;
  }
  async getGreskeForCommity(){
    let Greske = await[new Dogadjaj(), new Dogadjaj(), new Dogadjaj(), new Dogadjaj(), new Dogadjaj()];
    if(Greske[0]) { this.DefaultGreske.push(Greske[0]); Greske.shift();}
    if(Greske[1]) { this.DefaultGreske.push(Greske[1]); Greske.shift();}
    this.ExpandGreske = Greske;
  }


  async getAllKategorijeGreske(){
    let kategorije = await [new TipDogadjaja(),new TipDogadjaja()]
    this.KategorijaGreske =kategorije;
  }
  submitGreska(){
    this.isNewEventCollapsed = !this.isNewEventCollapsed
  }
  setKategorija(kategorija:any){
    this.selectedKategorija = kategorija;
  }
  async saveGreska(greska:Dogadjaj){

  }

}
