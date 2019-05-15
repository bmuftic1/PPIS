import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Rocket Raccoon';
  helpdesk:boolean=false;
  dev:boolean=false;
  user:boolean=false;
  
}
