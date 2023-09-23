import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { PortalComponent } from './components/portal/portal.component';
import { MainComponent } from './components/main/main.component';

import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "",
        component: LandingComponent
      },
      {
        path: "portal",
        component: PortalComponent,
        canActivate: [AuthGuard]
      },
    ]
  },

  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
