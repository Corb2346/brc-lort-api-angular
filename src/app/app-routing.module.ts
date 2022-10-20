import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainmenuComponent } from './components/mainmenu/mainmenu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MoviesComponent } from './components/movies/movies.component';
import { AuthGuard } from './services/guards/auth.guard';
import { LotrResolver } from './services/resolver/lotr.resolver';

const routes: Routes = [
  {
    path: '',
    component:LoginComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path:'mainmenu',
    component:MainmenuComponent,
    resolve:{
      books: LotrResolver
    },
    canActivate: [ AuthGuard],
    canLoad: [ AuthGuard ]
  },
  {
    path:'movies',
    component:MoviesComponent,
    canActivate: [ AuthGuard],
    canLoad: [ AuthGuard ]
  },
  {
    path:'characters',
    loadChildren: () => import('./characters/characters.module').then( m => m.CharactersModule),
    canActivate: [ AuthGuard],
    canLoad: [ AuthGuard ]
  },
  {
    path:'404',
    component:NotFoundComponent
  },
  {
    path:'**',
    redirectTo:'404',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
