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

  @Input() pData:any;
  prevLikedUserArr:any[]=[];//saves userid
  // likedObjArr:any[]=[]; 
  userInfo:any; //update obj
  postRef:any;
  qSnap:any;
  delIndex:number=-1;

  likedObj:any={
    likedBy:[],
    no_Likes:0
  }

  ngOnInit(): void {

    this.firebaseService.getUserData();
    this.userInfo=this.firebaseService.userData;
    //getting the previous liked data




    // this.fireStore.collection('posts', ref=> ref.where('uid','==',this.userInfo.uid)).get().subscribe(val=>{
    //   console.log("Val",val.docs)
    //   val.forEach(doc=>{
    //     console.log("docdata",doc.data())
    //   })
    // });
   

  }

  isLiked=false;

    checkLiked(){

      this.fireStore.collection('posts').doc(this.pData.postId).get().subscribe(qsnap=>{
        console.log("QSNAP=",qsnap.data())
        this.qSnap=qsnap.data();
        console.log("qsnap Array=",this.qSnap.liked.likedBy)
        this.likedObj.likedBy=[...this.qSnap.liked.likedBy]
        console.log("Previous Array=",this.qSnap.liked.likedBy)
        console.log("Length Inside=",this.likedObj.likedBy.length)

      })
      
      console.log("Length=",this.likedObj.likedBy.length)

      this.isLiked=!this.isLiked


      if(this.isLiked && !this.likedObj.likedBy.includes(this.userInfo.uid))
      {
        console.log("Liked")
        this.likedObj.likedBy.push(this.userInfo.uid)
        this.likedObj.no_Likes=this.likedObj.likedBy.length
        console.log("Lenght of Liked=",this.likedObj.no_Likes)

        this.fireStore.collection('posts').doc(this.pData.postId).update({
          liked:this.likedObj
        })

        console.log("New Liked Array=",this.likedObj.likedBy)
      }
     
      else{
        console.log("Unliked")
        this.delIndex=this.likedObj.likedBy.indexOf(this.pData.uid)
        console.log("index=",this.delIndex)

        this.likedObj.likedBy.splice(this.delIndex,1) //removes the user
        console.log("Length after del=",this.likedObj.likedBy.length) 


        this.likedObj.no_Likes=this.likedObj.likedBy.length

        // console.log("Num_Likes=",this.likedObj.no_Likes)
        // console.log("UserIdArr=",this.likedObj.likedBy)

        this.fireStore.collection('posts').doc(this.pData.postId).update({
          liked:this.likedObj
        })

        console.log("New Liked Array=",this.likedObj.likedBy)
        
      }
    

      

    }

  
  }

