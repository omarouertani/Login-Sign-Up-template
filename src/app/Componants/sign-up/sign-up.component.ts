import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm!: FormGroup;
  isDarkMode = false;


  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    
  
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z]+$/)]],
      firstName: ['', [Validators.required,Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z]+$/)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/),]],
      birthDate: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{7,15}$/)]],
    });
  }

  get name() {
    return this.signUpForm.get('name');
  }

  get firstName() {
    return this.signUpForm.get('firstName');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get birthDate() {
    return this.signUpForm.get('birthDate');
  }

  get phone() {
    return this.signUpForm.get('phone');
  }

  onSignUp() {
    if (this.signUpForm.valid) {
      const formData = this.signUpForm.value;
      console.log('Inscription réussie:', formData);
      alert('Compte créé avec succès !');
    } else {
      console.log('Formulaire invalide');
    }
  }

  onGoogleLogin() {
    console.log('Connexion avec Google');
    // Logique pour Google (API d'authentification Google à intégrer ici)
  }

  onFacebookLogin() {
    console.log('Connexion avec Facebook');
    // Logique pour Facebook (API d'authentification Facebook à intégrer ici)
  }
}
