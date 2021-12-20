import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { pipe, finalize } from 'rxjs';
import { Input } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
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


  video:string="";
  videoName:string="";

  uploadVideo(event:any)
  {
    this.video=event.target.files[0];
    this.videoName=event.target.files[0].name;
    console.log(event.target.files[0].name)
  }

  user:any=this.firebaseService.userData.uid;
  imgURL:any[]=[];

  uploadTask:any;
  @Input() videoData:any;
  @Input() videoURL:any;
  uploadToFirebase()
  {
    this.videoData.push(this.videoName)
    this.uploadTask=this.fireStorage.upload(`/videos/${this.user}/${this.videoName}`,this.video)

    this.firestore.collection('users').doc(this.firebaseService.userData.uid).update({
      posts:[...this.videoData]
    });

    this.uploadTask.then((uploadSnap:any)=>{
      console.log("UPLOAD COMPLETE")
      this.fireStorage.ref(`/videos/${this.user}/${this.videoName}`).getDownloadURL().subscribe(url=>{
        console.log("URL=",url)
        this.videoURL.push(url)
        this.firestore.collection('users').doc(this.firebaseService.userData.uid).update({
          postsURL:[...this.videoURL]
        })
      })
    })
    console.log(this.video)
    console.log(this.firebaseService.userData.uid)

  }


 
  ngOnInit(): void {

  }
  
}
