import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    const success = this.authService.login(this.username, this.password);
    if (success) {
      this.router.navigate(['/admin/dashboard']);
    } else {
      this.message = 'Credenciales incorrectas, intenta nuevamente';
    }
  }

  onRegister() {
    this.router.navigate(['/register']);
  }
}
