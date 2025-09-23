import { inject, Pipe, PipeTransform } from '@angular/core';
import { NotesService } from '../services/notes';

@Pipe({
  name: 'plainText'
})
export class PlainTextPipe implements PipeTransform {
  noteService = inject(NotesService);
  transform(value: string, factor: number): string {
    let planeText = this.noteService.getPlainText(value);
    if (factor != null && factor > 0) {
      return planeText.length > factor ? planeText.slice(0, (factor - 3)) + '...' : planeText;
    }
    return planeText;
  }

}
