import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ConnexionComponent,
    CCOMPTEComponent,
    SplashScreenComponent,
    RessourceComponent,
    FormationComponent,
    MARCHEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
