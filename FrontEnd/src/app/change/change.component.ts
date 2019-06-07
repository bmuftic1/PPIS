import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Promjena} from '../_services/promjena';
import {PromjeneService } from '../_services/promjene.service';
import {HistorijaPromjena} from '../_services/historijapromjena'
import {HistorijapromjenaService} from '../_services/historijapromjena.service'
import { isUndefined } from 'util';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {


  @Input() promjena:Promjena;

  @Input() changeSettings:any;
  disableRazvojnitim:boolean=true;
  disableStatus:boolean=true;

  Helpdesk=false;
  Korisnik=false;
  Developer=false;
  Komitet=false;

  @Output() onDeleted = new EventEmitter<boolean>();
  @Output() onSent = new EventEmitter<boolean>();
  @Output() onStarted = new EventEmitter<boolean>();
  @Output() onArchived = new EventEmitter<boolean>();
  @Output() onApproved = new EventEmitter<boolean>();

  defaultStatus:any;
  historijaZadnja:HistorijaPromjena;
  historijaPrva:HistorijaPromjena;

  CollapseData:boolean=true;

  constructor() {
   }

  Statuses : any[] = [
    {text: "Čekanje", style:"form-control form-status-cekanje"},
    {text: "Greška", style:"form-control form-status-greska"},
    {text: "U toku", style: "form-control form-status-uToku"},
    {text: "Završeno", style:"form-control form-status-zavrseno"}
  ]
  default:any;
  Prioriteti : any[] = [
    {text: "Jako nizak", style:"form-control form-prioritet-jn"},
    {text: "Nizak", style:"form-control form-prioritet-n"},
    {text: "Srednji", style: "form-control form-prioritet-s"},
    {text: "Visok", style:"form-control form-prioritet-v"},
    {text: "Jako visok", style:"form-control form-prioritet-jv"}
  ]
  ngOnInit() {
    if(this.changeSettings.Helpdesk!==undefined){this.Helpdesk =this.changeSettings.Helpdesk;this.disableRazvojnitim=false; this.disableStatus=false;}
    if(this.changeSettings.Korisnik !==undefined)this.Korisnik =this.changeSettings.Korisnik;
    if(this.changeSettings.Developer !==undefined){this.Developer =this.changeSettings.Developer;this.disableStatus=false;}
    if(this.changeSettings.Komitet !==undefined)this.Komitet =this.changeSettings.Komitet;
    this.GetHistories();
    this.defaultStatus =this.Statuses[0];//ovdje se treba uzeti status iz historije
    this.default =this.Prioriteti[0];//ovdje se treba uzeti prioritet iz historije
  }
  setStatus(status:any){
    this.defaultStatus = status
  }
  setPrioritet(prioritet:any){
    this.default = prioritet
  }

  async GetHistories(){
    this.historijaZadnja= await new HistorijaPromjena();
    this.historijaPrva =await new HistorijaPromjena();
    this.defaultStatus =this.Statuses[0];//ovdje se treba uzeti status iz historije
  }
  async delete(){}
  async send(){}
  async approve(){}
  async start(){}
  async archive(){}
}
