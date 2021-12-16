import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-upload-btn',
  templateUrl: './upload-btn.component.html',
  styleUrls: ['./upload-btn.component.css']
})
export class UploadBtnComponent implements OnInit {

  constructor(
    private firebaseService:FirebaseService
  ) { }

  ngOnInit(): void {
  }
  
}
