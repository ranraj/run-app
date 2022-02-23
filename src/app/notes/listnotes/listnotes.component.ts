import { Component, OnInit } from '@angular/core';
import { INote, Note } from '../note.model';

@Component({
  selector: 'app-listnotes',
  templateUrl: './listnotes.component.html',
  styleUrls: ['./listnotes.component.css']
})
export class ListnotesComponent implements OnInit {
  notes?: INote[];
  title = "Notes list"
  
  constructor() { }

  ngOnInit(): void {
        
    this.notes =  this.loadNotes();    
  }

  loadNotes(){
   return [new Note(1,"My first note"),
    new Note(2,"My second note"),
    new Note(3,"My third note"),
    new Note(4,"My fourth note")];
  }
}
