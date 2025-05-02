import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CCOMPTEComponent } from './c-compte/c-compte.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { RessourceComponent } from './ressource/ressource.component';
import { FormationComponent } from './formation/formation.component';
import { MARCHEComponent } from './marche/marche.component';
import { FINANCEMENTComponent } from './financement/financement.component';
import { AST1Component } from './ast1/ast1.component';



const routes: Routes = [
  { path: 'c-compte', component: CCOMPTEComponent},
  { path: 'connexion', component: ConnexionComponent},
  { path: 'accueil', component: AccueilComponent},
  { path: 'splash-screen', component: SplashScreenComponent},
  { 
    path: 'ressource', 
    component: RessourceComponent,
     
  },
  { 
    path: 'formation', 
    component: FormationComponent,
    
  },
  { 
    path: 'marche', 
    component: MARCHEComponent,
  },
  { path: 'financement',component:FINANCEMENTComponent },
  { path: 'ast1' ,component:AST1Component },
  { path: '', component: SplashScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
