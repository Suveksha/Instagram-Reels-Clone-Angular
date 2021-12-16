import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title='firebase-angular-auth';
  isSignedIn=false;

  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')!==null)
    this.isSignedIn=true;
    else
    this.isSignedIn=false;
  }

  handleLogout(){
    this.firebaseService.logout();
    this.isSignedIn=false;
  }

}
