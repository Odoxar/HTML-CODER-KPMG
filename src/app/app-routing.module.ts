import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: "users", component: UsersComponent },
  { path: "", redirectTo: "/users", pathMatch: "full" },
  { path: "authorization", component: AuthorizationComponent },
  { path: "admin", component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
