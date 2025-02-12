import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  
  @Input('appCustom') styleObj ={ bgC:'', fgC: '',ta:''};

  
  constructor(public myRef: ElementRef) {
    myRef.nativeElement.style.color = 'white';
    myRef.nativeElement.style.textAlign = 'center';
    myRef.nativeElement.style.marginTop = '2rem';
   }

   @HostListener('click') myFun(){
      this.myRef.nativeElement.style.color = 'red';
      this.myRef.nativeElement.style.background = this.styleObj.bgC;

   } 
}
