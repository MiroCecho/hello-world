import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  private windowOpen = false;

  toggleWindow(){
    this.windowOpen = !this.windowOpen; 
  }

  isWindowOpen(){
    return this.windowOpen;
  }
  // constructor() { }
}
