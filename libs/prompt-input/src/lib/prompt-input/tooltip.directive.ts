import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[appTooltip]',
  standalone: true,
})
export class TooltipDirective {
@Input('appTooltip') tooltipText!: string;

  constructor() {}

  @HostListener('mouseenter') onMouseMove() {

  }

  @HostListener('mouseenter') onMouseLeave() {

  }

}
