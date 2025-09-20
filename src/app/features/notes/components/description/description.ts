import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ITopic } from '../../../../core/interfaces/note-interface';
import { TextEditor } from '../../../../shared/components/text-editor/text-editor';
import { ButtonModule } from 'primeng/button';
import { StoreService } from '../../../../core/services/store';

@Component({
  selector: 'app-description',
  imports: [TextEditor, ButtonModule],
  templateUrl: './description.html',
  styleUrl: './description.scss'
})
export class Description implements OnInit, OnChanges{
  private storeService = inject(StoreService);
  @Input() topic: ITopic | undefined;

  @Output() emitEditorText = new EventEmitter<string>();

  isShowEditor: boolean = false;
  isMobile = this.storeService.checkMobile();

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["topic"]) {
      this.isShowEditor = false;
    }
  }

  editorText(text: string) {
    this.isShowEditor = false;
    this.emitEditorText.emit(text);
  }

}
