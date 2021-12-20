import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; 
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import {AngularFireStorage} from '@angular/fire/compat/storage'

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  userData:any;
  posts:string[]=[];
  postsURL:string[]=[];
  isLoggedIn=false;
  constructor(public firebaseAuth:AngularFireAuth,
    private firestore: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router,
    private angularFireStorage:AngularFireStorage
      ) {}

   async signin(email:string, password:string)
   {
     await this.firebaseAuth.signInWithEmailAndPassword(email,password)
     .then(res=>{
       this.userData=res.user;
       this.isLoggedIn=true
       localStorage.setItem('user',JSON.stringify(res.user))
     })
     this.router.navigate(['/home']);

   }

   async signup(email:string, password:string, name:string, uname:string)
   {
     await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
     .then(res=>{
       this.userData=res.user;
      localStorage.setItem('user',JSON.stringify(res.user)) //So that whenever we refresh the page the user can just login without sending back data to the server
       return this.firestore.collection('users').doc(res.user?.uid).set({
          email: email,
          password: password,
          name: name,
          user_name:uname,
          posts:[...this.posts],
          postsURL:[...this.postsURL],
          comments:[],
          likes:[]
       })
     })

     this.isLoggedIn=true
     this.router.navigate(['/home']);
   }

   logout(){
     this.firebaseAuth.signOut();
     localStorage.removeItem('user');
     this.router.navigate(['/login']);
   }
   
   
   


}
 