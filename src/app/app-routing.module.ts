import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListLivreComponent } from './components/list-livre/list-livre.component';
import { LivreComponent } from './livre/livre.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/magazines', pathMatch: 'full' },
  {path : 'magazines', component : ListLivreComponent },
  {path : 'magazines/:id', component : LivreComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
