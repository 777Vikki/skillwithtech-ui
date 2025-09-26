import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNotesAction } from './manage-notes-action';

describe('ManageNotesAction', () => {
  let component: ManageNotesAction;
  let fixture: ComponentFixture<ManageNotesAction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageNotesAction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageNotesAction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
