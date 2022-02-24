import { Component, OnInit } from '@angular/core';
import { INote, Note } from '../note.model';
import { NotesService,IGist,Gist } from '../notes.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-listnotes',
  templateUrl: './listnotes.component.html',
  styleUrls: ['./listnotes.component.css']
})
export class ListnotesComponent implements OnInit {
  notes?: INote[];
  title = "Notes list"
  
  constructor(protected noteService : NotesService) { }

  ngOnInit(): void {
      this.loadNotes();    
  }

  loadNotes(){   
   this.noteService.loadGist().subscribe({
    next: (res: HttpResponse<IGist[]>) => {
      
      this.notes = res.body?.map( gist => new Note(gist.id,gist.url)) ?? [];      
    },
    error: () => {
      console.log("error")
    },
  });        
  }
}
