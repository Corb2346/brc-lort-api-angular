import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { DisplayCharacterComponent } from './character/display-character.component';


@NgModule({
  declarations: [
    DisplayCharacterComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
