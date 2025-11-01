import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IContent } from '../../../../core/interfaces/note-interface';
import { TextEditor } from '../../../../shared/components/text-editor/text-editor';
import { ButtonModule } from 'primeng/button';
import { StoreService } from '../../../../core/services/store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  imports: [TextEditor, ButtonModule],
  templateUrl: './description.html',
  styleUrl: './description.scss'
})
export class Description implements OnInit, OnChanges {
  private storeService = inject(StoreService);
  @Input() topic: IContent | undefined;

  @Output() emitEditorText = new EventEmitter<string>();

  showReorderSectionIds = [53];
  isShowEditor: boolean = false;
  isMobile = this.storeService.checkMobileScreen();

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["topic"]) {
      this.isShowEditor = false;
    }
  }

  editorText(text: string) {
    this.isShowEditor = false;
    this.emitEditorText.emit(text);
  }

  onChangeOrder() {
    const descriptions = this.topic?.description.match(/<p>.*?<\/p>/g);

    if (descriptions) {
      for (let i = descriptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [descriptions[i], descriptions[j]] = [descriptions[j], descriptions[i]];
      }

      if (this.topic) {
        this.topic.description = descriptions.join("");
      }
    }
  }

}
