import { AfterViewInit, Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { IContent } from '../../../core/interfaces/note-interface';
import { NotesService } from '../../../core/services/notes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-description-modal',
  imports: [DialogModule],
  templateUrl: './description-modal.html',
  styleUrl: './description-modal.scss'
})
export class DescriptionModal {
  noteService = inject(NotesService);
  router = inject(Router);

  @Input() content: IContent | undefined;
  @Input() visible: boolean = false;
  @Output() emitClose = new EventEmitter<boolean>();

  onNavigate() {
    const url = this.router.serializeUrl(
    this.router.createUrlTree(['/notes/active-notes'], {
      queryParams: { notesId: this.content?.noteId, sectionId: this.content?.sectionId, subSectionId: this.content?.subSectionId, contentId: this.content?.topicId }
    })
  );
  window.open(url, '_blank');
  }

  onClose() {
    console.log('#close');
    this.visible = false;
    this.emitClose.emit(false);
  }
}
