import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorModal } from './text-editor-modal';

describe('TextEditorModal', () => {
  let component: TextEditorModal;
  let fixture: ComponentFixture<TextEditorModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextEditorModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextEditorModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
