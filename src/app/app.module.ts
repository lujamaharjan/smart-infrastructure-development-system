import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeshowComponent } from './components/homeshow/homeshow.component';
import { FooterComponent } from './components/footer/footer.component';

//imports for firebases
import { environment } from "../environments/environment"
import { AngularFireModule } from "angularfire2"
import { AngularFirestoreModule } from "angularfire2/firestore"
import { AngularFireAuthModule } from "angularfire2/auth";
import { DashboardComponent } from './components/admin/dashboard/dashboard.component'
import { FlashMessagesModule } from "angular2-flash-messages";


//services
import { AuthService } from "./services/auth.service";

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VotemeComponent } from './components/user/voteme/voteme.component';
import { NoticeComponent } from './components/notice/notice.component';
import { ResultComponent } from './components/result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeshowComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    VotemeComponent,
    NoticeComponent,
    ResultComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'sids'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot()

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
