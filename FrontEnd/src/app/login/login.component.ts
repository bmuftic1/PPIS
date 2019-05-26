import { Component, OnInit,HostListener } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Korisnik} from '../_services/korisnik'
import {ModalService} from'../_services/modal.service'
import {Router} from "@angular/router"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  closeResult: string;
  submitted = false;

  users: Korisnik[];
  loginID:Korisnik;

  constructor(private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,public modalService: ModalService,private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      password: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]]   
  });
  //this should be replaced with the service data eventually, but will serve for now
    this.users=[
      {id:0,firstName:'' ,lastName:'',username: 'helpdesk',password: 'helpdesk',inicijator:0,prijavio: 0,odobrio: 0,izvrsio: 0,napravioIzmjenu: 0,ulogaId: 0},
      {id:1,firstName:'' ,lastName:'',username: 'developer',password: 'developer',inicijator:0,prijavio: 0,odobrio: 0,izvrsio: 0,napravioIzmjenu: 0,ulogaId: 1},
      {id:0,firstName:'' ,lastName:'',username: 'korisnik',password: 'korisnik',inicijator:0,prijavio: 0,odobrio: 0,izvrsio: 0,napravioIzmjenu: 0,ulogaId: 2}
      ]
  //console.log(this.loginForm.value.username);
  }
  closeModal() {
    this.activeModal.close('Modal Closed');
  }
  get f() { 
    return this.loginForm.controls; }
    @HostListener('onSubmit')
  onSubmit(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.loginID = this.users.find(x=>x.username==this.loginForm.value.username);
    this.modalService.logIn(this.loginID);
    //da sve aplikacije preko ovog servisa mogu dobiti info ko je logovan
    //this.modalService.login.subscribe(logged=>this.loggedUser=logged); za dobivanje informacije u bilo kojoj komponenti
    //komponenta mora imati importovani modalService i inicijaliziran u konstruktoru(ima iznad)
    if(this.loginID){
      this.closeModal();
      switch(this.loginID.ulogaId){
        case 0:
          this.router.navigate(['../helpdesk'])
          break;
        case 1:
          this.router.navigate(['../developer'])
          break;
        case 2:
          this.router.navigate(['../korisnik'])
          break;
        
      }
    }
  }
  
}
