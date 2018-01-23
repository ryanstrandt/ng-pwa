import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrantComponent } from './registrant.component';

const RegistrantRoutes: Routes = [
  {
    path: 'registrants',
    component: RegistrantComponent,
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(RegistrantRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class RegistrantRouting {}
