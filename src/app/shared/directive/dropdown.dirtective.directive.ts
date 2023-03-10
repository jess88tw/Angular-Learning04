import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdownDirtective]',
})
export class DropdownDirtectiveDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  // mine answer using Renderer2
  // onClick = false;
  // @HostListener('click') click() {
  //   !this.onClick
  //     ? this.renderer.addClass(this.elRef.nativeElement, 'open')
  //     : this.renderer.removeClass(this.elRef.nativeElement, 'open');
  //   this.onClick = !this.onClick;
  // }

  // answer
  @HostBinding('class.open') onClick = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.onClick = this.elRef.nativeElement.contains(event.target)
      ? !this.onClick
      : false;
  }
}
