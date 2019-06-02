import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';
import {ChartsModule} from 'ng2-charts';
import { IdeaComponent } from './idea/idea.component';
import { ChangeManagementComponent } from './change-management/change-management.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { ChangeComponent } from './change/change.component';
import { EventComponent } from './event/event.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { ReportComponent } from './report/report.component';
import { GuestComponent } from './guest/guest.component';
@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    NgbModule,
    HttpClientModule, 
    ReactiveFormsModule,
    ChartsModule,
    RouterModule.forRoot([
      {path:'', component:IdeaComponent},
      {path:'korisnik',component:DashboardUserComponent}
])
  ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, LoginComponent, FooterComponent, IdeaComponent, ChangeManagementComponent, EventManagementComponent, ChangeComponent, EventComponent, DashboardUserComponent, ReportComponent, GuestComponent],
  bootstrap:    [ AppComponent ],
  providers: [NgbActiveModal,{provide: APP_BASE_HREF, useValue : '/' }],
  entryComponents: [LoginComponent],
  exports: [LoginComponent]
})
export class AppModule { }
