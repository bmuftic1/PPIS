import { Component, OnInit } from '@angular/core';
import { IzvjestajService } from '../_services/izvjestaj.service';
import { Korisnik } from '_old/src/app/_services/korisnik';
import { ChartsModule } from 'ng2-charts';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  nizKorisnika:Korisnik[];
  broj:any;
  kategorija1:any;
  kategorija2:any;
  broj1:any;
  broj2:any;
  public pieChartLabels:any;
  public pieChartData:any;
  public pieChartType: any;
  public pieChartLabels1:any;
  public pieChartData1:any;
  public pieChartType1: any;
  public chartOptions: any;
  constructor(public report:IzvjestajService) { }

  ngOnInit() {
    this.brojKorisnika();
    this.nizKorisnika=[];
    this.listaKorisnika();
    this.kategorijePromjena();
    this.test();
  }

  async brojKorisnika(){
    const data=await this.report.brojKorisnika();
    console.log(data);
    console.log(data[0].brojKorisnika);
    this.broj=data[0].brojKorisnika;
  }

  async listaKorisnika(){
    const data=await this.report.listaKorisnika();
    console.log(data);
    this.listaKorisnika=data;
  }

  async kategorijePromjena(){
    const data = await this.report.kategorijaPromjene();
    console.log(data);
    console.log(data[0].nazivKategorije);
    console.log(data[0].broj);
    this.kategorija1=data[0].nazivKategorije;
    this.broj1=data[0].broj;
    this.pieChartLabels = ['Greška u aplikaciji', 'Pogrešno korištenje aplikacije','Greška nakon uvođenja promjena','Nemogućnost implementacije promjene'];
    this.pieChartData = [25,17,22,40];
    this.pieChartType= 'pie';
    this.pieChartLabels1 =[this.kategorija1,this.kategorija2];
    this.pieChartData1=[this.broj1,this.broj2];
    this.pieChartType1='pie';
    this.chartOptions={
      responsive:true,
      legend:{
        labels:{
          fontColor:'white'
        }
      }
    }
  }
  async test(){
  }
}
