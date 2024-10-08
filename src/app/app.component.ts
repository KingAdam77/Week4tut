import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, AccountComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'week4tut';
}
