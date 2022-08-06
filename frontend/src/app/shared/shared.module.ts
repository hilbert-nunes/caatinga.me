import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './components/header/header.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { FooterComponent } from './components/footer/footer.component'
import { DiscoverComponent } from './components/discover/discover.component'
import { HomeListTreeComponent } from './components/home-list-tree/home-list.component'
import { CreditsComponent } from './components/credits/credits.component'

@NgModule({
  declarations: [
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    DiscoverComponent,
    HomeListTreeComponent,
    CreditsComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    DiscoverComponent,
    HomeListTreeComponent,
    CreditsComponent,
  ],
})
export class SharedModule {}
