import { Component, HostListener, OnInit, OnDestroy, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, authState, User } from '@angular/fire/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-formation',
  standalone:false,
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit, OnDestroy {
  private auth: Auth = inject(Auth);
  private router: Router = inject(Router);
  private authSubscription!: Subscription;

  isScrolled = false;
  isMenuOpen = false;

  ngOnInit(): void {
    this.onWindowScroll(); // Initialize scroll state
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
        this.router.navigate(['/connexion']); // Utilisation du Router Angular au lieu de window.location
      }
    });
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  navigateTo(path: string): void {
    this.closeMenu();
    this.router.navigate([path]);
  }

  openSettings(): void {
    console.log('Ouvrir les paramètres');
    // this.router.navigate(['/parametres']);
  }

  @HostListener('document:click', ['$event'])
  closeMenuOnClickOutside(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar') && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
}