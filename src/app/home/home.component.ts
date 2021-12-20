import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private firebaseService:FirebaseService,
    private fireStorage:AngularFireStorage,
    private firestore:AngularFirestore
  ) { }

  res:any;
  userVideoData:any=[];
  userVideoURL:any=[];
    
  ngOnInit(): void {
      this.firestore.collection('users').doc(this.firebaseService.userData.uid).get().subscribe(val=>{
      console.log("Value=",val.data()) //works
      this.res=val.data()
      console.log(this.res)
      this.userVideoData=this.res.posts
      console.log("UserVideoData=",this.userVideoData)

      this.userVideoURL=this.res.postsURL
      console.log("PostsURL=",this.userVideoURL)
    })

    // console.log("UserVideoData=",this.userVideoData)

    this.firebaseService.posts=this.userVideoData.posts;
    this.firebaseService.postsURL=this.userVideoURL.postsURL;
    // console.log(this.firebaseService.posts[0])
  }

}