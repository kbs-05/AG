import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c-compte',
  standalone: false,
  templateUrl: './c-compte.component.html',
  styleUrl: './c-compte.component.css'
})
export class CCOMPTEComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private firestore: Firestore,
    private auth: Auth,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      phone: [''],
      region: ['', Validators.required],
      address: [''],
      terms: [false, Validators.requiredTrue]
    });
  }

  async onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const { email, password, confirmPassword, ...userData } = this.registerForm.value;

    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }

    try {
      // 1. Créer l'utilisateur avec Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      const uid = userCredential.user.uid;

      // 2. Enregistrer les données dans Firestore avec le même UID
      const userDocRef = doc(this.firestore, 'users', uid);
      await setDoc(userDocRef, userData);

      alert('Compte créé avec succès !');
      this.router.navigate(['/accueil']);
    } catch (error: any) {
      console.error('Erreur lors de la création du compte : ', error);
      alert(error.message || "Une erreur est survenue.");
    }
  }
}
