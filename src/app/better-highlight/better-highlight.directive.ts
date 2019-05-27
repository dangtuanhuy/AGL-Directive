import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';
@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input('appBetterHighlight') highlightColor = 'pink';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {

  }
  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseenter') mouseover(evenData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');

    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(evenData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
