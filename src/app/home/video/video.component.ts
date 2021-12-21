import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Input } from '@angular/core';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(
    private firebaseService:FirebaseService,
    private fireStorage:AngularFireStorage
  ) { }

  @Input() videoPostData:any[]=[];
 
  ngOnInit(): void {
    console.log("VideoURL=",this.videoPostData)
  }

  
}
