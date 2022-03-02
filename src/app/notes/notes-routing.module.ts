import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnotesComponent } from './addnotes/addnotes.component';
import { ListnotesComponent } from './listnotes/listnotes.component';
import { ViewNotesComponent } from './view-notes/view-notes.component';

const routes: Routes = [{
  path : '', component: ListnotesComponent,
},
{
  path : 'add', component: AddnotesComponent,
},
{
  path : 'view', component: ViewNotesComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
