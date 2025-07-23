import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthService } from './services/auth.service';

import { OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Web_App';

  authService = inject(AuthService);

  get isEmployee() {
    return this.authService.isEmployee;
  }

  get isLoggedIn() {
    // console.log("wow : ", this.authService.isLoggedIn);
    return this.authService.isLoggedIn;
  }

  logout() {
    this.authService.logout();
  }
}
