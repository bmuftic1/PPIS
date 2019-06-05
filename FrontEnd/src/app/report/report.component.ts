import { Component, OnInit } from '@angular/core';
import { IzvjestajService } from '../_services/izvjestaj.service';
import { Korisnik } from '_old/src/app/_services/korisnik';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  nizKorisnika:Korisnik[];
  broj:any;
  public pieChartLabels: string[] = ['Greška u aplikaciji', 'Pogrešno korištenje aplikacije','Greška nakon uvođenja promjena','Nemogućnost implementacije promjene'];
  public pieChartData: number[] = [25,17,22,40];
  public pieChartType: any = 'pie';
  public pieChartLabels1:string[] =['Obične promjene','Hitne promjene'];
  public pieChartData1:number[]=[55,40];
  public pieChartType1: any='pie';
  public chartOptions: any={
    responsive:true,
    legend:{
      labels:{
        fontColor:'white'
      }
    }
  }

  constructor(public report:IzvjestajService) { }

  ngOnInit() {
    this.brojKorisnika();
    this.nizKorisnika=[];
    this.listaKorisnika();
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

}
