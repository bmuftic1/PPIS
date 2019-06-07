import { Component, OnInit } from '@angular/core';
import { IzvjestajService } from '../_services/izvjestaj.service';
import { Korisnik } from '_old/src/app/_services/korisnik';
import { ChartsModule } from 'ng2-charts';
import { TestBed } from '@angular/core/testing';
import { Promjena } from '../_services/promjena';
import { Dogadjaj } from '_old/src/app/_services/dogadjaj';
import { HistorijaPromjena } from '../_services/historijapromjena';
import { HistorijaDogadjaj } from '../_services/historijadogadjaj';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  promjenaId:number;
  eventId:number;
  inicijatorId:number;
  nizKorisnika:Korisnik[];
  nizPromjena:Promjena[];
  nizDogadjaja:Dogadjaj[];
  nizPromjenePrijavio:Promjena[];
  nizPromjeneIzvrsava:Promjena[];
  nizPromjeneOdobrava:Promjena[];
  nizZadnjaHistorijaPromjene:HistorijaPromjena[];
  nizPrvaHistorijaPromjene:HistorijaPromjena[];
  nizZadnjaHistorijaDogadjaja:HistorijaDogadjaj[];
  nizPrvaHistorijaDogadjaja:HistorijaDogadjaj[];
  nizDogadjajInicirao:HistorijaDogadjaj[];
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
    this.nizKorisnika=[];
    this.nizPromjenePrijavio=[];
    this.nizPromjeneIzvrsava=[];
    this.nizPromjeneOdobrava=[];
    this.nizZadnjaHistorijaPromjene=[];
    this.nizPrvaHistorijaPromjene=[];
    this.nizZadnjaHistorijaDogadjaja=[];
    this.nizPrvaHistorijaDogadjaja=[];
    this.nizDogadjajInicirao=[];
    this.brojKorisnika();
    this.listaKorisnika();
    this.kategorijePromjena();
    this.tipoviDogadjaja();
    this.promjeneCekanjeRjesavanje();
    this.dogadjajPrioritet();
    this.promjenePrijavio(this.promjenaId);
    this.promjeneIzvrsava(this.promjenaId);
    this.promjeneOdobrava(this.promjenaId);
    this.zadnjaHistorijaPromjene(this.promjenaId);
    this.prvaHistorijaPromjene(this.promjenaId);
    this.zadnjaHistorijaDogadjaja(this.eventId);
    this.prvaHistorijaDogadjaja(this.eventId);
    this.dogadjajInicirao(this.inicijatorId);
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
  async tipoviDogadjaja(){
    const data = await this.report.kategorijaPromjene();
    console.log(data);
    console.log(data[0]);
    console.log(data[0]);
    this.kategorija1=data[0].nazivKategorije;
    this.broj1=data[0].broj;
    this.pieChartLabels = [];
    this.pieChartData = [];
    this.pieChartType= 'pie';
    this.chartOptions={
      responsive:true,
      legend:{
        labels:{
          fontColor:'white'
        }
      }
    }
  }
  async promjeneCekanjeRjesavanje(){
    const data= await this.report.promjeneCekanjeRjesavanje();
    console.log(data);
    this.nizPromjena=data;
  }
  async dogadjajPrioritet(){
    const data = await this.report.dogadjajPrioritet();
    console.log(data);
    this.nizDogadjaja=data;  
  }
  async promjenePrijavio(prijavioId:number){
    const data = await this.report.promjenePrijavio(prijavioId);
    console.log(data);
    this.nizPromjenePrijavio=data;
  }
  async promjeneIzvrsava(izvrsavaId:number){
    const data = await this.report.promjeneIzvrsava(izvrsavaId);
    console.log(data);
    this.nizPromjeneIzvrsava=data;
  }
  async promjeneOdobrava(odobravaId:number){
    const data = await this.report.promjeneOdobrava(odobravaId);
    console.log(data);
    this.nizPromjeneOdobrava=data;
  }
  async zadnjaHistorijaPromjene(promjenaId:number){
    const data = await this.report.zadnjaHistorijaPromjene(promjenaId);
    console.log(data);
    this.nizZadnjaHistorijaPromjene=data;
  }
  async prvaHistorijaPromjene(promjenaId:number){
    const data = await this.report.prvaHistorijaPromjene(promjenaId);
    console.log(data);
    this.nizPrvaHistorijaPromjene=data;
  }
  async zadnjaHistorijaDogadjaja(eventId:number){
    const data = await this.report.zadnjaHistorijaDogadjaja(eventId);
    console.log(data);
    this.nizZadnjaHistorijaDogadjaja=data;
  }
  async prvaHistorijaDogadjaja(eventId:number){
    const data = await this.report.prvaHistorijaDogadjaja(eventId);
    console.log(data);
    this.nizPrvaHistorijaDogadjaja=data;
  }
  async dogadjajInicirao(inicijatorId:number){
    const data = await this.report.dogadjajInicirao(inicijatorId);
    console.log(data);
    this.nizDogadjajInicirao=data;
  }
}
