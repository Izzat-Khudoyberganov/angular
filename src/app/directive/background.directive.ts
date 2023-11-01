import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[bgOnHover]',
})
export class BgDirective {
  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.backgroundColor = 'red';
  }
}
