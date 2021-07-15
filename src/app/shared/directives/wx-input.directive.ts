import { AfterViewInit, Directive, ElementRef, Optional, Renderer2, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[appWxInput]'
})
export class WxInputDirective implements AfterViewInit {

  constructor(@Self() @Optional() public controlDirective: NgControl,
    private elmRef: ElementRef,
    private renderer: Renderer2) {

  }

  ngAfterViewInit() {
    this.renderer.createElement('span',)
    this.controlDirective?.statusChanges?.pipe(
      map(status => status === 'VALID' ? 'removeClass' : 'addClass'))
      .subscribe(method =>
        this.renderer[method](this.elmRef.nativeElement, 'input-invalid')
      );


  }
}
