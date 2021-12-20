import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-video-wrapper',
  templateUrl: './video-wrapper.component.html',
  styleUrls: ['./video-wrapper.component.css']
})
export class VideoWrapperComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) { }

  postVideos:any;

  ngOnInit(): void {
    this.postVideos=this.firebaseService.posts//gotto make a call
  }

}
