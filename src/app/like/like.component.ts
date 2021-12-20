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

  isLiked:boolean=true;
  isClicked=false;
  likeCount=0;
  postsResponse:any;
  posts:any[]=[]
  @Input() postId:any;

  checkClick()
  {
    this.isClicked=!this.isClicked;
    this.likeCount++;
    this.isLiked= !this.isLiked;
    console.log(this.isLiked)
    console.log("PostID=", this.postId)
    this.fireStore.collection('users').doc(this.firebaseService.userData.uid).get().subscribe(val=>{
      this.postsResponse=val.data();
      this.posts=this.postsResponse.posts;
      console.log("Posts=", this.posts)
    })
    // this.fireStore.collection('users').doc(this.firebaseService.userData.uid).collection('likes').doc(this.posts.)
    
  }
 

}
