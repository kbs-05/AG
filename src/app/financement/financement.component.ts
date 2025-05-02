import { Component, HostListener, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, authState, User } from '@angular/fire/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-financement', 
  standalone: false,
  templateUrl: './financement.component.html',
  styleUrls: ['./financement.component.css']
})
export class FINANCEMENTComponent implements OnInit {
  private auth: Auth = inject(Auth);
  private router: Router = inject(Router);
  private authSubscription!: Subscription;

  isMenuOpen = false;
  isScrolled = false;

  ngOnInit(): void {
    this.setupAuthGuard();
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  private setupAuthGuard(): void {
    this.authSubscription = authState(this.auth).subscribe((user: User | null) => {
      if (!user || user.isAnonymous) {
        this.router.navigate(['/connexion']);
      }
    });
  }

  // Gestion du menu
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  closeMenuOnClickOutside(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar') && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  openSettings(): void {
    console.log('Ouvrir les paramètres');
    // this.router.navigate(['/parametres']);
  }
}