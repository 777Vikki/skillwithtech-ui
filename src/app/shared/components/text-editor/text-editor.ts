import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-text-editor',
  imports: [ReactiveFormsModule, EditorModule, ButtonModule],
  templateUrl: './text-editor.html',
  styleUrl: './text-editor.scss'
})
export class TextEditor implements OnInit, OnChanges {
  formBuilder = inject(FormBuilder);

  @Input() editorText: string | undefined;
  @Input() editorStyle = {};
  @Input() showCancleBtn = false;
  @Input() showEditorBtn = true;

  @Output() emitEditorText = new EventEmitter<string>();
  @Output() onCancleEditor = new EventEmitter<void>();
  @Output() textOnChange = new EventEmitter<string>();

  textEditorForm = this.formBuilder.group({
    text: ['', [Validators.required]]
  });

  ngOnInit() {
    this.editorStyle = Object.assign({}, { height: '320px' }, this.editorStyle);
    this.textEditorForm.get('text')?.valueChanges.pipe(distinctUntilChanged(), debounceTime(300)).subscribe(d => {
      let changeValue = d || '';
      changeValue = changeValue.replace(/&nbsp;/g, ' ').replace(/(<p>\s*<\/p>)/g, '</br>')
      changeValue = changeValue === '</br>' ? '' : changeValue;
      this.textOnChange.next(changeValue);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['editorText']) {
      if (changes['editorText'].currentValue !== this.textEditorForm.value.text) {
        this.textEditorForm.patchValue({
          text: this.editorText
        });
      }
    }
  }

  onCancle() {
    this.onCancleEditor.emit();
  }

  onClear() {
    this.textEditorForm.reset();
  }

  onSubmit() {
    let text = this.textEditorForm.value.text ?? '';
    text = text.replace(/&nbsp;/g, ' ').replace(/(<p>\s*<\/p>)/g, '</br>');
    text = text === '</br>' ? '' : text;
    this.emitEditorText.emit(text);
  }
}
