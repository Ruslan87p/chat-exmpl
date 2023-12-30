import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GreetingWindowComponent } from './greeting-window.component';

describe('GreetingWindowComponent', () => {
  let component: GreetingWindowComponent;
  let fixture: ComponentFixture<GreetingWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetingWindowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GreetingWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
