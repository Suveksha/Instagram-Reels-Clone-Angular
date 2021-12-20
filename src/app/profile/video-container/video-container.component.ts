import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
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

  videoURL_Response:any;
  videoURL:any[]=[];
  posts:any[]=[];

  user=this.firebaseService.userData
  

  ngOnInit(): void {
  this.fireStore.collection('users').doc(this.firebaseService.userData.uid).get().subscribe(val=>{
    console.log(val.data())
    this.videoURL_Response=val.data();
    this.videoURL=this.videoURL_Response.postsURL
  })
  }

}
