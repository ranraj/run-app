import { Component, Input, OnInit } from '@angular/core';
import { INote } from '../note.model';

@Component({
  selector: 'app-notes-details',
  templateUrl: './notes-details.component.html',
  styleUrls: ['./notes-details.component.css']
})
export class NotesDetailsComponent implements OnInit {
  @Input() note: INote;

  constructor() { }

  ngOnInit(): void {
  }
  

}
