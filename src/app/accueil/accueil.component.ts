import { Component, HostListener, OnInit, OnDestroy, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, authState, signInAnonymously, User, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-accueil',
  standalone:false,
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit, OnDestroy {
  private auth: Auth = inject(Auth);
  private router: Router = inject(Router);
  private authSubscription!: Subscription;

  isLoggedIn: boolean = false;
  isMenuOpen = false;
  isScrolled = false;
  isGuestUser: boolean = false;

  // Variables pour le décompte des statistiques
  currentStats = {
    learners: 0,
    satisfaction: 0,
    trainers: 0,
    partnerships: 0
  };

  finalStats = {
    learners: 1200,
    satisfaction: 98,
    trainers: 25,
    partnerships: 15
  };

  statsAnimationStarted = false;

  ngOnInit(): void {
    this.checkIfStatsVisible();
    this.initAuthListener();
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  private initAuthListener(): void {
    this.authSubscription = authState(this.auth).subscribe((user: User | null) => {
      if (user) {
        this.isLoggedIn = true;
        this.isGuestUser = user.isAnonymous;
        
        if (this.isGuestUser) {
          this.showHomePageOnly();
        } else {
          this.showAllPages();
        }
      } else {
        this.handleUnauthenticatedUser();
      }
    });
  }

  private showHomePageOnly(): void {
    console.log('Mode invité activé - accès limité');
    // Logique pour utilisateurs anonymes
  }

  private showAllPages(): void {
    console.log('Utilisateur authentifié - accès complet');
    // Logique pour utilisateurs connectés
  }

  private async handleUnauthenticatedUser(): Promise<void> {
    try {
      await signInAnonymously(this.auth);
      console.log('Connexion anonyme réussie');
    } catch (error) {
      console.error('Erreur de connexion anonyme:', error);
    }
  }

  async signInWithGoogle(): Promise<void> {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(this.auth, provider);
      console.log("Connecté avec Google !");
      this.router.navigate(['/dashboard']); // Redirection après connexion
    } catch (error) {
      console.error("Erreur de connexion Google:", error);
      
      // Gestion des erreurs spécifiques
      if ((error as any).code === 'auth/popup-closed-by-user') {
        console.warn("L'utilisateur a fermé la fenêtre de connexion");
      } else if ((error as any).code === 'auth/account-exists-with-different-credential') {
        alert("Un compte existe déjà avec cette adresse email");
      }
    }
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

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  // Gestion du scroll
  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
    this.checkIfStatsVisible();
  }

  // Navigation
  openSettings(): void {
    if (this.isGuestUser) {
      alert('Cette fonctionnalité n\'est pas disponible en mode invité');
      return;
    }
    this.router.navigate(['/parametres']);
  }

  // Animation des statistiques
  private checkIfStatsVisible(): void {
    if (this.statsAnimationStarted) return;

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      const rect = statsSection.getBoundingClientRect();
      const isVisible = (
        rect.top <= (window.innerHeight * 0.75) &&
        rect.bottom >= (window.innerHeight * 0.25)
      );

      if (isVisible) {
        this.statsAnimationStarted = true;
        this.animateCounters();
      }
    }
  }

  private animateCounters(): void {
    const stats = Object.keys(this.currentStats) as Array<keyof typeof this.currentStats>;
    stats.forEach(stat => {
      this.animateValue(stat, this.finalStats[stat]);
    });
  }

  private animateValue(stat: keyof typeof this.currentStats, target: number): void {
    const duration = 1000;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      this.currentStats[stat] = Math.round(current);
    }, stepTime);
  }
}