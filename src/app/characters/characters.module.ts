import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { DisplayCharacterComponent } from './character/display-character.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DisplayCharacterComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule
  ],
  exports:[SharedModule]
})
export class CharactersModule { }
