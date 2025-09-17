import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TextEditor } from '../../components/text-editor/text-editor';

@Component({
  selector: 'app-text-editor-modal',
  imports: [DialogModule, Dialog, ButtonModule, TextEditor],
  templateUrl: './text-editor-modal.html',
  styleUrl: './text-editor-modal.scss',
})
export class TextEditorModal implements AfterViewInit{
  @Input() header: string | undefined;
  @Output() closeModal = new EventEmitter<{text: string}>();
  visible: boolean = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
       this.visible = true;
    });
  }

  onEditorText(text: string) {
    this.closeModal.emit({text: text});
  }

  close() {
    this.closeModal.emit();
  }
}
