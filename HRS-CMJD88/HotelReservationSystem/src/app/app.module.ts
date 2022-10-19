import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthContextComponent } from './components/auth-context/auth-context.component';
import { SigninFormComponent } from './components/auth-context/inner-items/signin-form/signin-form.component';
import { SignupFormComponent } from './components/auth-context/inner-items/signup-form/signup-form.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { TopBarComponent } from './components/dash-board/items/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import {MatOptionModule} from "@angular/material/core";
import {GuestContextComponent} from './components/dash-board/components/guest-context/guest-context.component'
import { GalleryPageComponent } from './components/dash-board/components/guest-context/gallery-page/gallery-page.component';
import { RoomDetailPageComponent } from './components/dash-board/components/guest-context/room-detail-page/room-detail-page.component';
import { ReviewDetailPageComponent } from './components/dash-board/components/guest-context/review-detail-page/review-detail-page.component';
import { ReservationDetailPageComponent } from './components/dash-board/components/guest-context/reservation-detail-page/reservation-detail-page.component';
import { TravelComponent } from './components/dash-board/components/guest-context/travel/travel.component';
import { OptionalsPageComponent } from './components/dash-board/components/guest-context/optionals-page/optionals-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AuthContextComponent,
    SigninFormComponent,
    SignupFormComponent,
    DashBoardComponent,
    TopBarComponent,
    GuestContextComponent,
    GalleryPageComponent,
    RoomDetailPageComponent,
    ReviewDetailPageComponent,
    ReservationDetailPageComponent,
    TravelComponent,
    OptionalsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
