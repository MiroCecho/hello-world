import { Injectable } from '@angular/core';
// import { WindowComponent } from './window/window.component'; 
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  // private windowOpen = false;
  // showWindow = false;

  // // constructor(private windowComponent: WindowComponent){}

  // toggleWindow(){
  //   this.windowOpen = !this.windowOpen; 
  //   // this.windowComponent.toggleWindow();
  // }

  // isWindowOpen(){
  //   return this.windowOpen;
  // }
  // // constructor() { }

  // dalsia verzia
  private showWindowSubject = new BehaviorSubject(false);
  showWindow$ = this.showWindowSubject.asObservable();

  toggleWindow(){
    this.showWindowSubject.next(!this.showWindowSubject.value);
  }
}
