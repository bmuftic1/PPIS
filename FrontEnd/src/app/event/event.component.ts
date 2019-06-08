import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dogadjaj } from '_old/src/app/_services/dogadjaj';
import { HistorijaDogadjaj } from '../_services/historijadogadjaj';
import { IzvjestajService } from '../_services/izvjestaj.service';
import { DogadjajService } from '../_services/dogadjaj.service';
import { TipdogadjajaService } from '../_services/tipdogadjaja.service';
import { HistorijadogadjajService } from '../_services/historijadogadjaj.service';
import { PrioritetdogadjajaService } from '../_services/prioritetdogadjaja.service';
import { AuthService } from '../_services/auth.service';
import { StatusdogadjajaService } from '../_services/statusdogadjaja.service';
import { NgSelectOption } from '@angular/forms';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() greska:Dogadjaj;
  @Input() changeSettings:any;
  disableStatus:boolean=true;
  default:any;
  historijaPrva: HistorijaDogadjaj;
  historijaZadnja: HistorijaDogadjaj;

  Helpdesk=false;
  Korisnik=false;
  Developer=false;
  Komitet=false;
nesto:Date;
  CollapseData:boolean=true;

  @Output() onDeleted = new EventEmitter<boolean>();

  Statuses : any[] = [
    {text: "Čekanje", style:"form-control form-status-cekanje"},
    {text: "Greška", style:"form-control form-status-greska"},
    {text: "U toku", style: "form-control form-status-uToku"},
    {text: "Završeno", style:"form-control form-status-zavrseno"}
  ]
  constructor(public izvjestajService: IzvjestajService,
    public dogadjajService: DogadjajService,
    public tipdogadjajaService: TipdogadjajaService,
    public historijadogadjajService: HistorijadogadjajService,
    public prioritetdogadjajaService: PrioritetdogadjajaService, 
    public authService:AuthService,
    public statusdogadjajaService : StatusdogadjajaService) { }

  ngOnInit() {
    this.getStatuses();
    console.log(this.Statuses);
    if(this.changeSettings.Helpdesk!==undefined){this.Helpdesk =this.changeSettings.Helpdesk; this.disableStatus = false;}
    if(this.changeSettings.Korisnik !==undefined)this.Korisnik =this.changeSettings.Korisnik;
    if(this.changeSettings.Developer !==undefined){this.Developer =this.changeSettings.Developer;this.disableStatus = false;}
    if(this.changeSettings.Komitet !==undefined)this.Komitet =this.changeSettings.Komitet;
    this.GetHistories(this.greska.id);
    this.default =this.historijaZadnja;//ovdje se treba uzeti status iz historije
  }
  async getStatuses(){
    const data = await this.statusdogadjajaService.getStatuseDogadjaja();
    this.Statuses = data;
    
  }
  setStatus(status:any){
    this.default = status
  }
  async GetHistories(id:number){
    this.historijaZadnja= await this.izvjestajService.zadnjaHistorijaDogadjaja(id);
    this.historijaPrva =await this.izvjestajService.prvaHistorijaDogadjaja(id);
    this.default =this.historijaZadnja;//ovdje se treba uzeti status iz historije
  }
  async delete(){}
}
