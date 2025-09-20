import { Component, inject, OnInit } from '@angular/core';
import { StoreService } from '../../core/services/store';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { INote } from '../../core/interfaces/note-interface';
import { NotesService } from '../../core/services/notes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule, FormsModule, Select],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  store = inject(StoreService);
  notesService = inject(NotesService);
  headers: INote[] = [];
  selectedHeader: INote | undefined;

  ngOnInit(): void {
    this.store.getHeaders().subscribe((d: INote[]) => {
      this.headers = d;
      this.selectedHeader = this.store.primaryHeader();
      if (this.selectedHeader) {
        this.notesService.setSelectedNotes(this.selectedHeader);
      }
    });
  }

  onSelectNote() {
    if (this.selectedHeader) {
      this.notesService.setSelectedNotes(this.selectedHeader);
    }
  }

}
