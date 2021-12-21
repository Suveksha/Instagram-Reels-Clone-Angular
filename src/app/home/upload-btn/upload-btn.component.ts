import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { pipe, finalize } from 'rxjs';
import { Input } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Console } from 'console';
@Component({
  selector: 'app-upload-btn',
  templateUrl: './upload-btn.component.html',
  styleUrls: ['./upload-btn.component.css']
})
export class UploadBtnComponent implements OnInit {

  constructor(
    private firebaseService:FirebaseService,
    private fireStorage:AngularFireStorage,
    private firestore:AngularFirestore
  ) { }
  

  uData:any;
  uploadTask:any;
  prevPostID:any[]=[];
  postRes:any;
  pid:any;

  uploadToFire(video:any)
  {
    console.log("Video Value",video.files[0])
    this.uploadTask=this.fireStorage.upload(`/videos/${video.files[0].name}`, video.files[0]);

    // getting the previous postID array from firebase
    this.firestore.collection('users').doc(this.uData.uid).get().subscribe(val=>{
      console.log("PrevData",val.data())
      this.postRes=val.data();
      this.prevPostID=this.postRes.postID;
      console.log("PostID PrevArray=",this.prevPostID)
    })
    //uploading data to firestore
    this.uploadTask.then((uploadSnap:any)=>{
      this.pid=this.firestore.createId();
      console.log("Upload Complete")
      this.fireStorage.ref(`/videos/${video.files[0].name}`).getDownloadURL().subscribe(url=>{
        console.log("URL=",url)
        
        this.firestore.collection('posts').doc(this.pid).set({
          postURL:url,
          uid:this.uData.uid,
          postId:this.pid
        })
          this.prevPostID.push(this.pid)
        this.firestore.collection('users').doc(this.uData.uid).update({
          postID:[...this.prevPostID]
        })
        })
      })
    }

 
  ngOnInit(): void {
    this.firebaseService.getUserData()
    this.uData=this.firebaseService.userData;
    console.log("HelloUserfromUpload",this.uData.uid)
  }

  
}

