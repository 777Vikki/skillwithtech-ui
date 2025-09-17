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

  @Input() editorStyle = {};
  @Input() showCancleBtn = false;

  @Output() emitEditorText = new EventEmitter<string>();
  @Output() onCancleEditor = new EventEmitter<void>();

  textEditorForm = this.formBuilder.group({
    text: ['', [Validators.required]]
  });

  ngOnInit() {
    this.editorStyle = Object.assign({}, { height: '320px' }, this.editorStyle)
  }

  onCancle() {
    this.onCancleEditor.emit();
  }

  onClear() {
    this.textEditorForm.reset();
  }

  onSubmit() {
    const editorText = this.textEditorForm.value.text ?? '';
    this.emitEditorText.emit(editorText);
  }
}
