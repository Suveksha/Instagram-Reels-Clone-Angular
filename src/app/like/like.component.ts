import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseService } from '../services/firebase.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  constructor(private fireStore:AngularFirestore,
              private firebaseService:FirebaseService,
            ) { }

  ngOnInit(): void {
  }

  isLiked=false;
    checkLiked(){
      this.isLiked=!this.isLiked;
    }

  
  }

