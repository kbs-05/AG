import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ressource',
  standalone:false,
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.css']
})
export class RessourceComponent {
  isMenuOpen = false;
  isScrolled = false;
  activeCategory = 'all';

  // Catégories de ressources
  categories = [
    { id: 'all', name: 'Toutes' },
    { id: 'cereales', name: 'Céréales' },
    { id: 'legumes', name: 'Légumes' },
    { id: 'fruits', name: 'Fruits' },
    { id: 'elevage', name: 'Élevage' },
    { id: 'techniques', name: 'Techniques' }
  ];

  // Ressources (exemple)
  resources = [
    {
      id: 1,
      title: 'Culture du Manioc',
      category: 'cereales',
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      duration: '15 min',
      type: 'Guide',
      description: 'Guide complet pour cultiver le manioc sous le climat gabonais, avec des techniques adaptées aux différentes régions.'
    },
    {
      id: 2,
      title: 'Plantation de Bananiers',
      category: 'fruits',
      image: 'https://th.bing.com/th/id/OIP.YivBvPMCAL9LfKX074jHSgHaE7?rs=1&pid=ImgDetMain',
      duration: '20 min',
      type: 'Guide',
      description: 'Techniques modernes pour maximiser la production de bananes, avec un focus sur la lutte contre les maladies courantes.'
    }
  ];

  // Filtre les ressources par catégorie
  get filteredResources() {
    if (this.activeCategory === 'all') {
      return this.resources;
    }
    return this.resources.filter(resource => resource.category === this.activeCategory);
  }

  // Change la catégorie active
  setCategory(category: string): void {
    this.activeCategory = category;
  }

  
  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}