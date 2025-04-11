import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formation',
  standalone: false,
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})
export class FormationComponent {
  isScrolled = false;
  isMenuOpen = false;

  constructor(public router: Router) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  ngOnInit(): void {
    this.onWindowScroll(); // Initialize scroll state
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
}