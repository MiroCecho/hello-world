import { Component } from '@angular/core';
import { WindowService } from '../window.service';
import { TooltipPosition } from '@angular/material/tooltip'
// import { WindowComponent } from '../window/window.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  constructor(private windowService: WindowService){}

  // positionOption: TooltipPosition[] = ['before'];

  public textColor = 'black';
  
  public toggleTextColor(){
    this.textColor = this.textColor === 'black' ? 'white' : 'black';
  }

  onWindowButtonClick(){
    this.windowService.toggleWindow();

    // this.windowComponent.toggleWindow();
    // console.log("windowclick");

    // nova verzia
    // this.windowService.showWindow = true;

    // dalsia verzia
    // const newWindow = window.open('', '_blank', 'width=400,height=400');
    // if (newWindow) {
    //   newWindow.document.write('<app-window></app-window>');
    // }
  }
}
