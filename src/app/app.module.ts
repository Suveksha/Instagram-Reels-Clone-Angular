import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './login/form/form.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { UploadBtnComponent } from './home/upload-btn/upload-btn.component';
import { VideoComponent } from './home/video/video.component';
import { SignupComponent } from './signup/signup.component';
import { SignupFormComponent } from './signup/signup-form/signup-form.component';
import { ProfileComponent } from './profile/profile.component';
import { UserInfoComponent } from './profile/user-info/user-info.component';
import { VideoContainerComponent } from './profile/video-container/video-container.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

import {AngularFireModule} from '@angular/fire/compat';
import { FirebaseService } from './services/firebase.service';
import { LikeComponent } from './like/like.component';
import { CommentComponent } from './comment/comment.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormComponent,
    HomeComponent,
    NavbarComponent,
    UploadBtnComponent,
    VideoComponent,
    SignupComponent,
    SignupFormComponent,
    ProfileComponent,
    UserInfoComponent,
    VideoContainerComponent,
    NotFoundComponent,
    LikeComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    RouterModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBKE9xyOJ__9MVrNMD33aL-UQGfB_WtgrA",
      authDomain: "instagram-clone-app-63753.firebaseapp.com",
      projectId: "instagram-clone-app-63753",
      storageBucket: "instagram-clone-app-63753.appspot.com",
      messagingSenderId: "232589787762",
      appId: "1:232589787762:web:cf2f53faf87354575b78eb"
    }),
    MatIconModule,
    MatMenuModule,
   
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent], 
  
})
export class AppModule { }
