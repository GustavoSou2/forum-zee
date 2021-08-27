import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* Firebase Imports */
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from './app.routing';

/* Component APP */
import { CreateAccountComponent } from './views/create-account/create-account.component';
import { LoginComponent } from './views/login/login.component';
import { PanelComponent } from './views/panel/panel.component';
import {AngularFireAuthModule} from "@angular/fire/auth";
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { CardPostComponent } from './components/card-post/card-post.component';
import { PostComponent } from './views/post/post.component';

/* Material Imports */

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    LoginComponent,
    PanelComponent,
    HeaderComponent,
    CardPostComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
