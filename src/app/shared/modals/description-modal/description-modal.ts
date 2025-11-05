import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { IContent } from '../../../core/interfaces/note-interface';
import { NotesService } from '../../../core/services/notes';
import { Router } from '@angular/router';
import { StoreService } from '../../../core/services/store';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-description-modal',
  imports: [DialogModule, ButtonModule],
  templateUrl: './description-modal.html',
  styleUrl: './description-modal.scss'
})
export class DescriptionModal {
  noteService = inject(NotesService);
  store = inject(StoreService);
  router = inject(Router);

  @Input() content: IContent | undefined;
  @Input() visible: boolean = false;
  @Input() modalWidth: string = '65rem';
  @Output() emitClose = new EventEmitter<boolean>();

  isMobileScreen = this.store.checkMobileScreen();

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
