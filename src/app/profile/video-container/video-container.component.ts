import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { type } from 'os';
@Component({
  selector: 'app-video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.css']
})
export class VideoContainerComponent implements OnInit {

  constructor(
    private firebaseService:FirebaseService,
    private fireStorage:AngularFireStorage,
    private fireStore:AngularFirestore
    ) { }
    
    userData:any;
    user_id:any;
    postRes:any;
    postIds:any[]=[];
    postUrls:any[]=[];
    urlRes:any
    postIDs:any[]=[]

  ngOnInit(): void {
    this.firebaseService.getUserData();
    this.userData=this.firebaseService.userData;

    this.user_id=this.userData.uid;
   

    console.log("UserID",this.user_id)

    this.fireStore.collection('users').doc(this.user_id).get().subscribe(usData=>{
      console.log("UserData=",usData.data())
      this.postRes=usData.data()
      this.postIds=this.postRes.postID
      console.log("PostIdsArray=",this.postIds)
      console.log("PostIdsArrayType=",typeof(this.postIds))

//make call to the posts collection for the post url
      this.postIds.forEach(post=>{
        this.fireStore.collection('posts').doc(post).get().subscribe(urlData=>{
          console.log(urlData.data())//works
          this.urlRes=urlData.data();
          this.postIDs.push(this.urlRes.postURL)
          // this.firebaseService.postUrls=[...this.postIds]
        })
      })
      console.log("PostIds=",this.postIDs)
    })
  
  }

}
