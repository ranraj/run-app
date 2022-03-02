import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { INote, Note } from '../note.model';
import { IGist, NotesService } from '../notes.service';

@Component({
  selector: 'app-view-notes',
  templateUrl: './view-notes.component.html',
  styleUrls: ['./view-notes.component.css']
})
export class ViewNotesComponent implements OnInit {

  id?: string;
  note?: INote;
  isEdit: boolean = false;

  constructor( private route: ActivatedRoute,private noteService: NotesService) { }

  ngOnInit(): void {
     
    this.id = this.route.snapshot.paramMap.get('id') ?? "";
    this.noteService.loadGist().subscribe({
      next: (res: HttpResponse<IGist[]>) => {        
        this.note = res.body?.map( gist => new Note(gist.id,gist.url)).find(n => n.id == this.id);      
      },
      error: () => {
        console.log("error")
      },
    }); 
  }
  edit(){
    this.isEdit = true;
  }

  save(){
    console.log(this.note);
  }

}