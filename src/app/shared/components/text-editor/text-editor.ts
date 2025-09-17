import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-text-editor',
  imports: [ReactiveFormsModule, EditorModule, ButtonModule],
  templateUrl: './text-editor.html',
  styleUrl: './text-editor.scss'
})
export class TextEditor implements OnInit {
  formBuilder = inject(FormBuilder);

  @Input() editorText: string | undefined;
  @Input() editorStyle = {};
  @Input() showCancleBtn = false;

  @Output() emitEditorText = new EventEmitter<string>();
  @Output() onCancleEditor = new EventEmitter<void>();

  textEditorForm = this.formBuilder.group({
    text: ['', [Validators.required]]
  });

  ngOnInit() {
    this.editorStyle = Object.assign({}, { height: '320px' }, this.editorStyle);
    this.textEditorForm.patchValue({
      text: this.editorText
    });
  }

  onCancle() {
    this.onCancleEditor.emit();
  }

  onClear() {
    this.textEditorForm.reset();
  }

  onSubmit() {
    let text = this.textEditorForm.value.text ?? '';
    text = text.replace(/&nbsp;/g, ' ');
    text = text.replace(/(<p>\s*<\/p>)/g, '</br>');
    this.emitEditorText.emit(text);
  }
}
