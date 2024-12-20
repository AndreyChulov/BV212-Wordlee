import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wordlee } from './wordlee.component';

describe('Wordlee', () => {
  let component: Wordlee;
  let fixture: ComponentFixture<Wordlee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wordlee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wordlee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
