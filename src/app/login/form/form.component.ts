import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  isSignedIn=false
  constructor(public firebaseService:FirebaseService){}


  ngOnInit(): void {
    if(localStorage.getItem('user')!==null)
    this.isSignedIn=true;
    else
    this.isSignedIn=false;
  }

  async signIn(email:string, password:string){
    await this.firebaseService.signin(email,password)

    if(this.firebaseService.isLoggedIn)
      this.isSignedIn=true
  }

}
