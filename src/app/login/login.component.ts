import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // Sample users array with photo URLs
  users = [
    { email: 'user1@example.com', password: '123', username: 'User1', birthdate: '1990-01-01', age: 34, photo: 'asset/user1.jpg' },
    { email: 'user2@example.com', password: '456', username: 'User2', birthdate: '1985-05-15', age: 39, photo: 'asset/user2.jpg' },
    { email: 'user3@example.com', password: 'password3', username: 'User3', birthdate: '2000-07-30', age: 24, photo: 'asset/user3.jpg' }
  ];

  email = "";
  password = "";

  constructor(private router: Router) {}

  login() {
    const user = this.users.find(u => u.email === this.email && u.password === this.password);
    if (user) {
      // Save user details (including photo URL) to session storage
      sessionStorage.setItem('user', JSON.stringify({
        username: user.username,
        birthdate: user.birthdate,
        age: user.age,
        email: user.email,
        photo: user.photo
      }));
      this.router.navigate(['/profile']);  // Navigate to profile page after login
    } else {
      alert('Invalid credentials');
    }
  }
}
