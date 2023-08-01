import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { eliminarToken, guardarToken, obtenerToken } from 'src/app/localStorage/auth.localstorage';
import { environment } from 'src/environments/environment.dev';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public auth: AuthService) {
  }

  public configuracion_proyectos = environment.proyectos;

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
