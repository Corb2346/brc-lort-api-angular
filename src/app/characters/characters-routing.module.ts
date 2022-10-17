import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayCharacterComponent } from './character/display-character.component';

const routes: Routes = [

  {
    path:'',
    children: [
      {
        path:'character',
        component:DisplayCharacterComponent
      },
      {
        path:'**',
        redirectTo:'character'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
