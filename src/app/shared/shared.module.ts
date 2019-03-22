import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavigationComponent } from './components/navigation/navigation.component';
import { AppRoutingModule } from '../app-routing.module';
import { LangComponent } from './components/lang/lang.component';

@NgModule({
  imports: [CommonModule, AppRoutingModule],
  exports: [HeaderComponent, FooterComponent, NavigationComponent,LangComponent],
  declarations: [HeaderComponent, FooterComponent, NavigationComponent,LangComponent]
})
export class SharedModule {}
