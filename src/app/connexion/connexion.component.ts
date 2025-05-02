import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-connexion',
  standalone: false,
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  email: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(private auth: Auth, private router: Router) {}

  async onLogin(): Promise<void> {
    const trimmedEmail = this.email.trim();
    const trimmedPassword = this.password.trim();

    if (!trimmedEmail || !trimmedPassword) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    this.loading = true;
    try {
      await signInWithEmailAndPassword(this.auth, trimmedEmail, trimmedPassword);
      this.loading = false;
      this.router.navigate(['/accueil']);
    } catch (error: any) {
      this.loading = false;
      console.error("Erreur de connexion :", error);
      alert(this.getErrorMessage(error.code));
    }
  }

  getErrorMessage(code: string): string {
    switch (code) {
      case 'auth/user-not-found': return "Utilisateur introuvable.";
      case 'auth/wrong-password': return "Mot de passe incorrect.";
      case 'auth/invalid-email': return "Email invalide.";
      case 'auth/too-many-requests': return "Trop de tentatives. Réessayez plus tard.";
      default: return "Une erreur est survenue lors de la connexion.";
    }
  }
}
