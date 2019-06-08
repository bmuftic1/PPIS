import { Component, OnInit, Input } from '@angular/core';
import { Dogadjaj } from '_old/src/app/_services/dogadjaj';
import { TipDogadjaja } from '_old/src/app/_services/tipdogadjaja';
import { IzvjestajService } from '../_services/izvjestaj.service';
import { DogadjajService } from '../_services/dogadjaj.service';
import { TipdogadjajaService } from '../_services/tipdogadjaja.service';
import { HistorijadogadjajService } from '../_services/historijadogadjaj.service';
import { PrioritetdogadjajaService } from '../_services/prioritetdogadjaja.service';
import { AuthService } from '../_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

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
  Greske:Dogadjaj[];
  constructor(public izvjestajService: IzvjestajService,
    public dogadjajService: DogadjajService,
    public tipdogadjajaService: TipdogadjajaService,
    public historijadogadjajService: HistorijadogadjajService,
    public prioritetdogadjajaService: PrioritetdogadjajaService, 
    public authService:AuthService) {
    this.DefaultGreske=[];
    this.ExpandGreske=[];
   }

  ngOnInit() {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.authService.token);
    console.log(decodedToken.userId);
    if(this.MyGreske) this.getGreskeOfUser(decodedToken.userId);
    else this.getAllGreske();
    /*if(this.GreskeKomitet) this.getGreskeForDev();
    if(this.GreskeForMe) this.getGreskeForCommity();*/
    this.getAllKategorijeGreske();
  }

  async getGreskeOfUser(id:number){
    const data = await this.izvjestajService.dogadjajInicirao(id);
    if(data[0]) { this.DefaultGreske.push(data[0]); data.shift();}
    if(data[1]) { this.DefaultGreske.push(data[1]); data.shift();}
    this.ExpandGreske = data;
  }
  async getAllGreske(){
    const data = await this.dogadjajService.getDogadjaji()
    console.log(data);
    if(data[0]){this.DefaultGreske.push(data[0]);}
    if(data[1]){this.DefaultGreske.push(data[1]);}
    this.ExpandGreske=data;
    this.ExpandGreske.shift();
    this.ExpandGreske.shift();
  }
  /*async getGreskeForDev(){
    let Greske = await 
    if(Greske[0]) { this.DefaultGreske.push(Greske[0]); Greske.shift();}
    if(Greske[1]) { this.DefaultGreske.push(Greske[1]); Greske.shift();}
    this.ExpandGreske = Greske;
  }
  async getGreskeForCommity(){
    let Greske = await[new Dogadjaj(), new Dogadjaj(), new Dogadjaj(), new Dogadjaj(), new Dogadjaj()];
    if(Greske[0]) { this.DefaultGreske.push(Greske[0]); Greske.shift();}
    if(Greske[1]) { this.DefaultGreske.push(Greske[1]); Greske.shift();}
    this.ExpandGreske = Greske;
  }*/


  async getAllKategorijeGreske(){
    const kategorije = await this.tipdogadjajaService.getTipoveDogadjaja();
    console.log(kategorije);
    this.KategorijaGreske =kategorije;
    console.log(this.KategorijaGreske);
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
