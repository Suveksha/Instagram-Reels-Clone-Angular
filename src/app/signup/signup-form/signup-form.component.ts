import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  isSignedUp=false;
  title='firebase-angular-auth'
  constructor(
    // private formBuilder:FormBuilder,
    public firebaseService:FirebaseService
    ) { }

  // signUpForm=this.formBuilder.group({
  //   email:[''],
  //   fname:[''],
  //   uname:[''],
  //   password:['']
  // })

  // saveSignUpForm()
  // {
  //   console.log(this.signUpForm.value)
  // }

  ngOnInit(): void {
    if(localStorage.getItem('user')!==null)
    this.isSignedUp=true;
    else
    this.isSignedUp=false;
  }

  async signUp(email:string, password:string){
    await this.firebaseService.signup(email,password)

    if(this.firebaseService.isLoggedIn)
      this.isSignedUp=true
  }


}
