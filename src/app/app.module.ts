import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideImgixLoader } from '@angular/common';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CCOMPTEComponent } from './c-compte/c-compte.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { RessourceComponent } from './ressource/ressource.component';
import { RouterModule } from '@angular/router';
import { FormationComponent } from './formation/formation.component';
import { MARCHEComponent } from './marche/marche.component';
import { FINANCEMENTComponent } from './financement/financement.component';
import { AST1Component } from './ast1/ast1.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ConnexionComponent,
    CCOMPTEComponent,
    SplashScreenComponent,
    RessourceComponent,
    FormationComponent,
    MARCHEComponent,
    FINANCEMENTComponent,
    AST1Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    provideRouter([]),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    provideImgixLoader('https://yourdomain.imgix.net'),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
