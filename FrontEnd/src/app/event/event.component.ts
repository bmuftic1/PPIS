import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dogadjaj } from '_old/src/app/_services/dogadjaj';
import { HistorijaDogadjaj } from '../_services/historijadogadjaj';

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

  CollapseData:boolean=true;

  @Output() onDeleted = new EventEmitter<boolean>();

  Statuses : any[] = [
    {text: "Čekanje", style:"form-control form-status-cekanje"},
    {text: "Greška", style:"form-control form-status-greska"},
    {text: "U toku", style: "form-control form-status-uToku"},
    {text: "Završeno", style:"form-control form-status-zavrseno"}
  ]
  constructor() { }

  ngOnInit() {
    if(this.changeSettings.Helpdesk!==undefined){this.Helpdesk =this.changeSettings.Helpdesk; this.disableStatus = false;}
    if(this.changeSettings.Korisnik !==undefined)this.Korisnik =this.changeSettings.Korisnik;
    if(this.changeSettings.Developer !==undefined){this.Developer =this.changeSettings.Developer;this.disableStatus = false;}
    if(this.changeSettings.Komitet !==undefined)this.Komitet =this.changeSettings.Komitet;
    this.GetHistories();
    this.default =this.Statuses[0];//ovdje se treba uzeti status iz historije
  }
  setStatus(status:any){
    this.default = status
  }
  async GetHistories(){
    this.historijaZadnja= await new HistorijaDogadjaj();
    this.historijaPrva =await new HistorijaDogadjaj();
    this.default =this.Statuses[0];//ovdje se treba uzeti status iz historije
  }
  async delete(){}
}
