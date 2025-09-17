import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ITopic } from '../../../../core/interfaces/note-interface';
import { TextEditor } from '../../../../shared/components/text-editor/text-editor';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-description',
  imports: [TextEditor, ButtonModule],
  templateUrl: './description.html',
  styleUrl: './description.scss'
})
export class Description implements OnInit, OnChanges{
  @Input() topic: ITopic | undefined;

  @Output() emitEditorText = new EventEmitter<string>();

  isShowEditor: boolean = false;

  ngOnInit(): void {
    console.log(window.innerWidth);
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
