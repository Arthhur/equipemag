import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListLivreComponent } from './components/list-livre/list-livre.component';
import { LivreComponent } from './livre/livre.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { CdkDragDropComponent } from './components/cdk-drag-drop/cdk-drag-drop.component';

const routes: Routes = [
  {path: '', redirectTo: '/accueil', pathMatch: 'full' },
  {path: 'accueil', component : HeaderComponent  },
  {path : 'magazines', component : ListLivreComponent },
  {path : 'magazines/:id', component : LivreComponent },
  {path : 'drag-drop', component : CdkDragDropComponent }
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
