import { Component,HostBinding, Input } from '@angular/core';
import {Korisnik} from '../app/_services/korisnik'
import {ModalService} from'../app/_services/modal.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Rocket Raccoon';
  public helpdesk:boolean=false;
  public dev:boolean=false;
  public user:boolean=false;
  loggedUser:Korisnik;

  constructor(public modalService: ModalService) {
    this.helpdesk=false;
  }
  ngOnInit(){
    this.modalService.login.subscribe(logged=>this.loggedUser=logged);
  }
  ngDoCheck(){
    if(this.loggedUser){
      switch(this.loggedUser.ulogaId){
        case 0:
          this.helpdesk=true;
          break;
        case 1:
          this.dev =true;
          break;
        case 2:
          this.user=true;
          break;
        
      }
    }
  }
}