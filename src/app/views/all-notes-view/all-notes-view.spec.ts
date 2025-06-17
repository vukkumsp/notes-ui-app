import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNotesView } from './all-notes-view';

describe('AllNotesView', () => {
  let component: AllNotesView;
  let fixture: ComponentFixture<AllNotesView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllNotesView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllNotesView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
