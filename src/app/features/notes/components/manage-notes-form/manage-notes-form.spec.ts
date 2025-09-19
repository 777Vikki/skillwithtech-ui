import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNotesForm } from './manage-notes-form';

describe('ManageNotesForm', () => {
  let component: ManageNotesForm;
  let fixture: ComponentFixture<ManageNotesForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageNotesForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageNotesForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
