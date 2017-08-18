import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes/heroes.component';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

