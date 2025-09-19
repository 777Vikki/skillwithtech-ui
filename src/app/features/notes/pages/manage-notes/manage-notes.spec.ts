import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNotes } from './manage-notes';

describe('ManageNotes', () => {
  let component: ManageNotes;
  let fixture: ComponentFixture<ManageNotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageNotes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageNotes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
