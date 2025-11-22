import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveNotesLoader } from './active-notes-loader';

describe('ActiveNotesLoader', () => {
  let component: ActiveNotesLoader;
  let fixture: ComponentFixture<ActiveNotesLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveNotesLoader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveNotesLoader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
