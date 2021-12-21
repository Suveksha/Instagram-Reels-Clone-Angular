import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private firebaseService:FirebaseService,
    private fireStorage:AngularFireStorage,
    private firestore:AngularFirestore
  ) { }

    SinglePost:any;
    postObj:any={
      postId:'',
      postUrl:''
    }
    postData:any[]=[]//array of obj
    pdData:any;
    uData:any;
  ngOnInit(): void {

    this.firestore.collection('posts').get().subscribe(eachData=>{
      console.log("EachData=",eachData)
      eachData.forEach(postDoc=>{
        console.log("PostD=",postDoc)
        console.log("PostDdata=",postDoc.data())
        this.pdData=postDoc.data();

        this.postData.push(this.pdData)
      })
    });
    }
    
  }
