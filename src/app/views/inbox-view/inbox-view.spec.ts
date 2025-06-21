import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxView } from './inbox-view';

describe('InboxView', () => {
  let component: InboxView;
  let fixture: ComponentFixture<InboxView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InboxView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboxView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
