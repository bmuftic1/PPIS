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

  default:any;
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
  ngOnInit() {
    if(this.changeSettings.Helpdesk!==undefined){this.Helpdesk =this.changeSettings.Helpdesk;this.disableRazvojnitim=false; this.disableStatus=false;}
    if(this.changeSettings.Korisnik !==undefined)this.Korisnik =this.changeSettings.Korisnik;
    if(this.changeSettings.Developer !==undefined){this.Developer =this.changeSettings.Developer;this.disableStatus=false;}
    if(this.changeSettings.Komitet !==undefined)this.Komitet =this.changeSettings.Komitet;
    this.GetHistories();
    this.default =this.Statuses[0];//ovdje se treba uzeti status iz historije
  }
  setStatus(status:any){
    this.default = status
  }

  async GetHistories(){
    this.historijaZadnja= await new HistorijaPromjena();
    this.historijaPrva =await new HistorijaPromjena();
    this.default =this.Statuses[0];//ovdje se treba uzeti status iz historije
  }
  async delete(){}
  async send(){}
  async approve(){}
  async start(){}
  async archive(){}
}
