import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TermsComponent } from './terms/terms.component';



@NgModule({
  declarations: [
    LandingComponent,
    SignInComponent,
    NavbarComponent,
    TermsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class HomeModule { }
