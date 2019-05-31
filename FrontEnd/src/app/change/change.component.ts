import { Component, OnInit, Input} from '@angular/core';
import {Promjena} from '../_services/promjena';
import {PromjeneService } from '../_services/promjene.service';
import {HistorijaPromjena} from '../_services/historijapromjena'
import {HistorijapromjenaService} from '../_services/historijapromjena.service'

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {

  
  constructor() { }
  default:any;
  @Input() disableRazvojnitim:boolean=true;
  @Input() disableStatus:boolean=true;

  @Input()Helpdesk=false;
  @Input()Korisnik=false;
  @Input()Developer=false;
  @Input()Komitet=false;

  historija:HistorijaPromjena;

  CollapseData:boolean=true;

  Statuses : any[] = [
    {text: "Čekanje", style:"form-control form-status-cekanje"},
    {text: "Greška", style:"form-control form-status-greska"},
    {text: "U toku", style: "form-control form-status-uToku"},
    {text: "Završeno", style:"form-control form-status-zavrseno"}
  ]
  ngOnInit() {
    this.GetHistory();
    this.default =this.Statuses[0];

  }
  setStatus(status:any){
    this.default = status
  }

  async GetHistory(){
    this.historija= await new HistorijaPromjena();
  }
}
