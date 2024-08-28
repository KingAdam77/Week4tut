import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user = {
    username: '',
    birthdate: '',
    age: 0,
    email: '',
    photo: ''
  };

  constructor(private router: Router) {
    // Retrieve user data from session storage
    const userData = sessionStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    } else {
      // Redirect to login if no user data is found
      this.router.navigate(['/login']);
    }
  }

  saveProfile() {
    // Save updated user data to session storage
    sessionStorage.setItem('user', JSON.stringify(this.user));
  }
}
