import { inject, Injectable } from '@angular/core';
import { INote } from '../interfaces/note-interface';
import { Note } from '../enums/note-enum';
import { BackendService } from './backend';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  backendService = inject(BackendService);

  private headerList: INote[] = [];

  primaryHeader() {
    return [...this.headerList].find(note => note.type === Note.ANGULAR);
  }

  getHeaders(): Observable<INote[]> {
    return this.backendService.getHeaders().pipe(tap((d: INote[]) => {
      this.headerList = d;
    }));
  }

  checkMobileScreen(): boolean {
    // Mobile (small devices) → window.innerWidth <= 768px
    // Tablet (medium devices) → 769px – 1024px
    // Desktop (large devices) → >= 1025px
    if (window.location.hostname === 'localhost') {
      return window.innerWidth <= 450;
    } else {
      return window.innerWidth <= 768;
    }
  }

}
