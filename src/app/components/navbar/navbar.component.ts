import { Component } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';
import { pages } from 'src/app/constants/main.constants';

import { eliminarToken, guardarToken } from 'src/app/localStorage/auth.localstorage';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public auth: AuthService) {
  }

  public pages = pages;

  ngOnInit(): void {
    this.verificarSesion();
  }

  public login(): void {
    this.auth.loginWithRedirect();
  }

  public logout(): void {
    this.auth.logout({ logoutParams: { returnTo: document.location.origin } })
  }

  private verificarSesion(): void {
    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.auth.getAccessTokenSilently().subscribe((token) => {
          guardarToken(token);
        });
      } else {
        eliminarToken();
      }
    });
  }
}
