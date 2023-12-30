import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PromptInputComponent } from './prompt-input.component';
import { ApiService } from 'apps/chat-gpt-example/src/app/layout/api.service';
import { HttpClientModule } from '@angular/common/http';

describe('PromptInputComponent', () => {
  let component: PromptInputComponent;
  let fixture: ComponentFixture<PromptInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromptInputComponent, HttpClientModule],
      providers: [ApiService]
    }).compileComponents();

    fixture = TestBed.createComponent(PromptInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init not empty', () => {
    const el = fixture.nativeElement.querySelector('textarea');
    el.value = 'something';
    el.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    component.onSubmit()
  });

  it('should init empty', () => {
    const el = fixture.nativeElement.querySelector('textarea');
    el.value = null;
    el.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  });

  it('should triger keypress event on an element', () => {
    const enterKeypress = new KeyboardEvent('keypress', {
      keyCode: 13, // Enter
    });
    const myTableEle = fixture.nativeElement.querySelector('textarea');
    component.onEnterSubmit(enterKeypress)
    component.onSubmit()
    enterKeypress.preventDefault();
    myTableEle.dispatchEvent(enterKeypress);
    fixture.detectChanges();
});


});
