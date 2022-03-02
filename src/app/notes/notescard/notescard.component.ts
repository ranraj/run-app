import { Component, OnInit,Input } from '@angular/core';
import { INote, Note } from '../note.model';

@Component({
  selector: 'app-notescard',
  templateUrl: './notescard.component.html',
  styleUrls: ['./notescard.component.css']  
})
export class NotescardComponent implements OnInit {
  @Input() note: INote; 

  constructor() { }

  ngOnInit(): void {
  }

}
