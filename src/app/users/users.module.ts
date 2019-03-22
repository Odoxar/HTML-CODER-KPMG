import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { OfferComponent } from './offer/offer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  imports: [CommonModule],
  exports: [UsersComponent, OfferComponent, AboutUsComponent, InfoComponent],
  declarations: [
    UsersComponent,
    OfferComponent,
    AboutUsComponent,
    InfoComponent
  ]
})
export class UsersModule {}