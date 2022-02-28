import { Component, OnInit,Input } from '@angular/core';
import { Note } from '../note.model';

@Component({
  selector: 'app-notescard',
  templateUrl: './notescard.component.html',
  styleUrls: ['./notescard.component.css']  
})
export class NotescardComponent implements OnInit {
  @Input() noteId : String; 
  @Input() noteUrl : String; 

  constructor() { }

  ngOnInit(): void {
  }

}
