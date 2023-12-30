import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorsComponent } from './errors.component';
import { HttpClientModule } from '@angular/common/http';

describe('ErrorsComponent', () => {
  let component: ErrorsComponent;
  let fixture: ComponentFixture<ErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorsComponent, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
