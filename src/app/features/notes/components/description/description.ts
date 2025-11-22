import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IContent } from '../../../../core/interfaces/note-interface';
import { TextEditor } from '../../../../shared/components/text-editor/text-editor';
import { ButtonModule } from 'primeng/button';
import { StoreService } from '../../../../core/services/store';
import { TooltipModule } from 'primeng/tooltip';
import { DescriptionModal } from '../../../../shared/modals/description-modal/description-modal';
import { NotesService } from '../../../../core/services/notes';
import { SharedNotesService } from '../../services/shared-notes';

@Component({
  selector: 'app-description',
  imports: [TextEditor, ButtonModule, DescriptionModal, TooltipModule],
  templateUrl: './description.html',
  styleUrl: './description.scss'
})
export class Description implements OnInit, OnChanges {
  private storeService = inject(StoreService);
  private notesService = inject(NotesService);
  private sharedNotesService = inject(SharedNotesService);
  @Input() content: IContent | undefined;

  @Output() emitEditorText = new EventEmitter<string>();

  showReorderContentIds = this.sharedNotesService.activeReorderContentIdList;
  isShowEditor: boolean = false;
  description: string | undefined;
  isMobile = this.storeService.checkMobileScreen();
  reOrderCount: number[] = [];
  visibleDescriptionModal: boolean = false;
  descriptionModalData: IContent | undefined;

  ngOnInit(): void {
    if(this.showReorderContentIds() === undefined) {
      this.getReorderContentIds();
    }
  }

  getReorderContentIds() {
    this.notesService.getReorderContentIds()
      .subscribe(response => {
        this.sharedNotesService.setActiveReorderContentIdList(response);
      })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["content"]) {
      this.description = this.content?.description ?? '';
      this.reOrderCount = [];
      this.isShowEditor = false;
    }
  }

  editorText(text: string) {
    this.isShowEditor = false;
    this.emitEditorText.emit(text);
  }

  onEdit() {
    this.isShowEditor = true;
    this.description = this.content?.description;
    this.reOrderCount = [];
  }

  onViewAnswer(event: MouseEvent) {
    const target = event.target as HTMLAnchorElement;
    if (target.href) {
      const parsedUrl = new URL(target.href);
      const params = parsedUrl.searchParams;
      const sectionId = params.get('sectionId');
      const subSectionId = params.get('subSectionId');
      const contentId = params.get('contentId');
      const subjectId = params.get('subjectId');
      if (subjectId && sectionId && contentId) {
        event.preventDefault();
        this.visibleDescriptionModal = true;
        this.notesService.getContent(+subjectId, +sectionId, subSectionId? +subSectionId : -1, +contentId)
          .subscribe(response => {
            console.log('#onViewAnswer');
            if(response.status && response.data.length) {
              this.descriptionModalData = response.data[0] as IContent;
              this.descriptionModalData.subjectId = +subjectId;
            }
          })
      }
    }
  }

  onChangeOrder() {
    const isPreContent = this.content && this.content.description.includes('<pre') && this.content.description.includes('</pre>')
    if (isPreContent) {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
      }
      this.reOrderCount = arr;
    } else {
      const descriptions = this.content?.description.match(/<p>.*?<\/p>/g);

      if (descriptions) {
        for (let i = descriptions.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [descriptions[i], descriptions[j]] = [descriptions[j], descriptions[i]];
        }

        if (this.content) {
          this.description = descriptions.join("");
        }
      }
    }
  }

}
