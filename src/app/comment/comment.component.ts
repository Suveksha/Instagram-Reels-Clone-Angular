import {Component, OnInit, Inject, Input} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CommentModalComponent } from '../comment-modal/comment-modal.component';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() postData:any;
  constructor(public dialog: MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open(CommentModalComponent, {
      data:{
        pData: this.postData
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog Closed");
    });
  }
  ngOnInit(): void {
  }

}
