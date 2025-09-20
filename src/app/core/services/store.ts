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

  private noteList: INote[] = [];

  primaryNote() {
    return [...this.noteList].find(note => note.type === Note.ANGULAR);
  }

  getNotes(): Observable<INote[]> {
    return this.backendService.getHeaders().pipe(tap((d: INote[]) => {
      this.noteList = d;
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

  checkMobile(): boolean {
    // Check user agent for mobile
    const ua = navigator.userAgent || (window as any).opera;
    const mobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua);

    // Check touch capability
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Consider mobile if either user agent or touch + small screen
    const smallScreen = window.innerWidth <= 768;

    return mobileUA || (isTouch && smallScreen);
  }

}
