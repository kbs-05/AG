import { Component, inject, OnInit } from '@angular/core';
import { Auth, User, authState } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  standalone: false,
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'AG';
  private auth: Auth = inject(Auth);
  private router = inject(Router);
  private authStateSub: Subscription | null = null;

  ngOnInit() {
    this.authStateSub = authState(this.auth).subscribe((user: User | null) => {
      const currentUrl = this.router.url;
      const protectedRoutes = ['/ressource', '/formation', '/marche'];
      
      if (!user && protectedRoutes.some(route => currentUrl.includes(route))) {
        this.router.navigate(['/connexion'], {
          queryParams: { returnUrl: currentUrl }
        });
      }
    });
  }

  ngOnDestroy() {
    this.authStateSub?.unsubscribe();
  }
  constructor() {
   
  }
}