import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { AddnotesComponent } from './addnotes/addnotes.component';
import { ListnotesComponent } from './listnotes/listnotes.component';
import { NotescardComponent } from './notescard/notescard.component';

@NgModule({
  declarations: [
    AddnotesComponent,   
    ListnotesComponent, NotescardComponent,       
  ],
  imports: [    
    CommonModule,
    NotesRoutingModule,                 
  ]  
})
export class NotesModule { }
