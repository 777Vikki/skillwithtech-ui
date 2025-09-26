import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNotesCrud } from './manage-notes-crud';

describe('ManageNotesCrud', () => {
  let component: ManageNotesCrud;
  let fixture: ComponentFixture<ManageNotesCrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageNotesCrud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageNotesCrud);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
