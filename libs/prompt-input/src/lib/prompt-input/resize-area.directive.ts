import { Directive, ElementRef, HostListener, OnChanges } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[appResizeArea]',
  standalone: true,
})
export class ResizeAreaDirective implements OnChanges {
  constructor(private elementRef: ElementRef) { }
  @HostListener(':input')
  onInputText() {
    this.resizeArea();
  }

  ngOnChanges() {
    if (this.elementRef.nativeElement.scrollHeight) {
      this.resizeArea();
    }
  }

  resizeArea() {
    this.elementRef.nativeElement.style.height = '0';
    this.elementRef.nativeElement.style.height = this.elementRef.nativeElement.scrollHeight + 'px';
  }
}
