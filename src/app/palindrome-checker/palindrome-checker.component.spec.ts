import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalindromeCheckerComponent } from './palindrome-checker.component';

describe('PalindromeCheckerComponent', () => {
  let component: PalindromeCheckerComponent;
  let fixture: ComponentFixture<PalindromeCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalindromeCheckerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalindromeCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
