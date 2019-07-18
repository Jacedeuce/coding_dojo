import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAuthorsComponent } from './view-authors/view-authors.component'
import { AddAuthorComponent } from './add-author/add-author.component'
import { EditAuthorComponent } from './edit-author/edit-author.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path : 'view', component : ViewAuthorsComponent},
  { path : 'new', component : AddAuthorComponent},
  { path : 'edit/:id', component : EditAuthorComponent},
  { path : '', redirectTo: 'view', pathMatch: 'full'}, //set default component to load
  { path : '**', redirectTo: 'view'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
