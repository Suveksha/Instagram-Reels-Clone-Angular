import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private fireStore:AngularFirestore,
    private firebaseService: FirebaseService) { }
    res:any;
    uname:string='';
    email:string='';
    no_posts:number=0;
  ngOnInit(): void {
    this.fireStore.collection('users').doc(this.firebaseService.userData.uid).get().subscribe(val=>{
      console.log("User Details=",val.data())
      
      this.res=val.data();
      this.uname=this.res.user_name;
      this.email=this.res.email;
      this.no_posts=this.res.postID.length;
    })
    
  }

}
