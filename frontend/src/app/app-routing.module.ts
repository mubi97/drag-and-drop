import { StaffNavigationComponent } from './staffPanel/staff-navigation/staff-navigation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { NotLoggedInGuard } from './guards/not-logged-in.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'staff-panel',
    pathMatch: 'full'
    // canActivate: [AuthGuard]
  },
  {
    path: 'staff-panel',
    component: StaffNavigationComponent,
    // canActivate: [NotLoggedInGuard],
    children: [
      {
        path: '', redirectTo: 'add-patient', pathMatch: 'full'
      },
      {
        path: 'add-patient', component: LoginComponent
      },

    ]
  },
  {
    path: '**', redirectTo: 'staff-panel'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
