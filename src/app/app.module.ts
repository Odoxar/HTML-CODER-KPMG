import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { UsersModule } from './users/users.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AuthorizationComponent } from './authorization/authorization.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthorizationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
