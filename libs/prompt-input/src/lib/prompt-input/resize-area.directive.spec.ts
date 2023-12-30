import { inject } from '@angular/core/testing';
import { ResizeAreaDirective } from './resize-area.directive';
import { ElementRef } from '@angular/core';

describe('ResizeAreaDirective', () => {

  it('should create an instance', () => {
    inject([ElementRef], (elementRef: ElementRef) => {
      const directive = new ResizeAreaDirective(elementRef);
      expect(directive).toBeTruthy();
    });
  });

});
