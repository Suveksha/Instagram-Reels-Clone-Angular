import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';
@Component({
  selector: 'app-upload-btn',
  templateUrl: './upload-btn.component.html',
  styleUrls: ['./upload-btn.component.css']
})
export class UploadBtnComponent implements OnInit {

  constructor(
    private firebaseService:FirebaseService,
    private fireStorage:AngularFireStorage
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
  uploadToFirebase()
  {
    this.fireStorage.upload(`/videos/${this.user}/${this.videoName}`,this.video)
    console.log(this.video)
    console.log(this.firebaseService.userData.uid)
  }

  ngOnInit(): void {
  }
  
}
