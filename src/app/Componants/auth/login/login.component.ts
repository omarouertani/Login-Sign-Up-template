import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  isDarkMode = false;


  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      rememberMe: [false]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log('Form Data:', this.loginForm.value);
    } else {
      console.error('Formulaire invalide !');
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

 

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
  
}
