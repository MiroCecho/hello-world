import { Component,ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent {
  showWindow = false;
  isDragging = false;
  initialX = 0;
  initialY = 0;
  offsetX = 0;
  offsetY = 0;

  toggleWindow(){
    this.showWindow = !this.showWindow;
  }

  startDragging(event: MouseEvent){
    if(!this.isDragging){
      this.isDragging = true;
      this.initialX = event.clientX - this.offsetX;
      this.initialY = event.clientY - this.offsetY;
    }
  }

  @HostListener('document:mousemove',['$event'])
  onDrag(event: MouseEvent){
    if(this.isDragging){
      this.offsetX = event.clientX - this.initialX;
      this.offsetY = event.clientY - this.initialY;
      console.log(this.offsetX);
    }
  }

  // @HostListener('document:mouseup',['$event'])
  stopDragging(){
    this.isDragging = false;
  }

  // private isDragging = false;
  // private startX = 0;
  // private startY = 0;
  // windowStyles: { [key: string]: string } = {};

  // constructor(private el: ElementRef, private renderer: Renderer2){

  // }
  
  // @HostListener('mousedown',['$event'])
  // onMouseDown(event: MouseEvent){
  //   this.isDragging = true;
  //   this.startX = event.clientX;
  //   this.startY = event.clientY;
  //   this.renderer.addClass(document.body,'dragging');
  // }

  // @HostListener('document:mousemove', ['$event'])
  // onMouseMove(event: MouseEvent){
  //   if (this.isDragging) {
  //     const offsetX = event.clientX - this.startX;
  //     const offsetY = event.clientX - this.startY;
  //     this.startX = event.clientX;
  //     this.startY = event.clientY;

  //     const windowElement = this.el.nativeElement.querySelector('.window');
  //     const currentLeft = parseInt(windowElement.style.left || '0',10);
  //     const currentTop = parseInt(windowElement.style.top || '0',10);

  //     this.renderer.setStyle(windowElement, 'left', currentLeft + offsetX + 'px');
  //     this.renderer.setStyle(windowElement, 'top', currentTop + offsetY + 'px');
      
  //     // const window = document.querySelector('.window');
  //     // const rect = window?.getBoundingClientRect();
  //     // if (rect) {
  //     //   const newLeft = rect.left + offsetX;
  //     //   const newTop = rect.top + offsetY;
  //     //   this.windowStyles.left = (parseInt(this.windowStyles.left || '0')+newLeft) + 'px';
  //     //   this.windowStyles.top = (parseInt(this.windowStyles.top || '0')+newTop) + 'px';
  //     // }
      
  //   }

  //   // @HostListener('document:mouseup')
  //   // onMouseUp(){
  //   //   if (this.isDragging) {
  //   //     this.isDragging = false;
  //   //     this.renderer.removeClass(document.body,'dragging');
  //   //   }

  //   // }

  //   // onMouseDown(event: MouseEvent){
  //   //   this.isDragging = true;
  //   //   this.startX = event.clientX;
  //   //   this.startY = event.clientY;
  //   // }
  // }
}
