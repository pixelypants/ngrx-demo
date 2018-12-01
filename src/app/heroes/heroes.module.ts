import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [HeroListComponent, HeroComponent],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
