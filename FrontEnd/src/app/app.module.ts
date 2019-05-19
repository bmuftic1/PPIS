import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { ChangeStatusComponent } from './change-status/change-status.component';
import { DeveloperContentComponent } from './developer-content/developer-content.component';
import { DeveloperWrapperComponent } from './developer-wrapper/developer-wrapper.component';
import { HelpdeskChangesComponent } from './helpdesk-changes/helpdesk-changes.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { GuestComponent } from './guest/guest.component';
import { GuestWrapperComponent } from './guest-wrapper/guest-wrapper.component';
import { DeveloperContentListComponent } from './developer-content-list/developer-content-list.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule,HttpClientModule, ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent, WrapperComponent, ChangeStatusComponent, DeveloperContentComponent, DeveloperWrapperComponent, HelpdeskChangesComponent, HeaderComponent, LoginComponent, GuestComponent, GuestWrapperComponent, DeveloperContentListComponent, FooterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [NgbActiveModal],
  entryComponents: [LoginComponent],
  exports: [LoginComponent]
})
export class AppModule { }
