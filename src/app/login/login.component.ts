import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  users = [
    { email: 'user1@example.com', password: '123' },
    { email: 'user2@example.com', password: '456' },
    { email: 'user3@example.com', password: 'password3' }
  ];
  email= "";
  password="";

  constructor(private router: Router) {}

  login() {
    const user = this.users.find(u => u.email === this.email && u.password === this.password);
    if (user) {
      this.router.navigate(['/account']);
    } else {
      alert('Invalid credentials');
    }
  }
}


