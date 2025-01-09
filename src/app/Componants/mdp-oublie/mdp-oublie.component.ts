import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mdp-oublie',
  templateUrl: './mdp-oublie.component.html',
  styleUrls: ['./mdp-oublie.component.css']
})
export class MdpOublieComponent {
  forgotPasswordForm: FormGroup;
  isDarkMode = false;
  showToast = false;
  showWarningToast = false;


  constructor(private fb: FormBuilder) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get email() {
    return this.forgotPasswordForm.get('email');
  }

  onForgotPassword() {
    if (this.forgotPasswordForm.valid) {
      const email = this.forgotPasswordForm.value.email;

      // Logique pour envoyer un email de réinitialisation
      console.log('Réinitialisation demandée pour:', email);

      // Affichage du toast
      this.showToast = true;

      // Cacher le toast après 3 secondes
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    } else {
      // Affichage du toast d'avertissement lorsque le formulaire est invalide
      console.log('Formulaire invalide');
      this.showWarningToast = true;

      // Masquer le toast après 3 secondes
      setTimeout(() => {
        this.showWarningToast = false;
      }, 3000);
  }
}
}
