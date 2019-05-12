import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { ChangeStatusComponent } from './change-status/change-status.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule],
  declarations: [ AppComponent, HelloComponent, WrapperComponent, ChangeStatusComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
