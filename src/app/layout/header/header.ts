import { Component, inject, OnInit } from '@angular/core';
import { StoreService } from '../../core/services/store';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { INote } from '../../core/interfaces/note-interface';
import { NotesService } from '../../core/services/notes';

@Component({
  selector: 'app-header',
  imports: [FormsModule, Select],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit{
  store = inject(StoreService);
  notesService = inject(NotesService);
  notes: INote[] = [];
  selectedNote: INote | undefined;

  ngOnInit(): void {
    this.selectedNote = this.store.primaryNote();
    if(this.selectedNote) {
      this.notesService.setSelectedNotes(this.selectedNote);
    }
    this.notes = this.store.getNotes();
  }

  onSelectNote() {
    if(this.selectedNote) {
      this.notesService.setSelectedNotes(this.selectedNote);
    }
  }

}
