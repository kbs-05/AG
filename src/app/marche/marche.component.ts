import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-marche',
  standalone: false,
  templateUrl: './marche.component.html',
  styleUrl: './marche.component.css'
})
export class MARCHEComponent {
  isMenuOpen = false;
  isScrolled = false;

  // Ouvre/ferme le menu mobile
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Ferme le menu si on clique à l'extérieur
  @HostListener('document:click', ['$event'])
  closeMenuOnClickOutside(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar') && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  // Gestion de l'effet au scroll
  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  // Ferme le menu quand on navigue (pour mobile)
  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
