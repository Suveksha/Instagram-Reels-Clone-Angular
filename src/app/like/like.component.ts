import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isLiked:boolean=false;
  isClicked=false;
  likeCount=0;

  checkClick()
  {
    this.isClicked=!this.isClicked;
    this.likeCount++;
    this.isLiked= !this.isLiked;
    console.log(this.isLiked)
  }
 

}
