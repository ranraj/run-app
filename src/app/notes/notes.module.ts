import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { AddnotesComponent } from './addnotes/addnotes.component';
import { ListnotesComponent } from './listnotes/listnotes.component';
import { NotescardComponent } from './notescard/notescard.component';
import { NotesDetailsComponent } from './notes-details/notes-details.component';
import { ViewNotesComponent } from './view-notes/view-notes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddnotesComponent,   
    ListnotesComponent, NotescardComponent, NotesDetailsComponent, ViewNotesComponent,       
  ],
  imports: [    
    FormsModule,
    CommonModule,
    NotesRoutingModule,                 
  ]  
})
export class NotesModule { }
