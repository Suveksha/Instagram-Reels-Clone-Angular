import { Component, OnInit,Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseService } from '../services/firebase.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.css']
})
export class CommentModalComponent implements OnInit {

  uData:any;
  placeHolder:string=''

  commentObj:any={
    text:'',
    uid:''
  }

  commentArray:any[]=[];

  constructor(private firebaseService:FirebaseService,
    private fireStore:AngularFirestore,
    @Inject(MAT_DIALOG_DATA) public InjectData: any) { }

  postComment(comment:any)
  {
    console.log(comment.value)
    console.log("Pdata=",this.InjectData.pData.postId)
    this.commentObj.text=comment.value;
    this.commentObj.uid=this.uData.uid;

    this.commentArray.push(this.commentObj)

    this.fireStore.collection('posts').doc(this.InjectData.pData.postId).update({
      comment:[...this.commentArray]
    })
  }
  
  ngOnInit(): void {
    this.firebaseService.getUserData();
    this.uData=this.firebaseService.userData;
    this.placeHolder="Comment as "+this.uData.uid

    this.fireStore.collection("posts").doc(this.InjectData.pData.postId).get().subscribe(query=>{
      console.log("Query=",query)
      let queryRes:any=query.data()

      
      queryRes.comment.forEach((com:any) => {
          console.log(com)
          this.commentArray.push(com)
      });
    })
  } 


}
