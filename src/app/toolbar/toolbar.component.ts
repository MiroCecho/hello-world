import { Component } from '@angular/core';
import { WindowService } from '../window.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  constructor(private windowService: WindowService){}

  onWindowButtonClick(){
    this.windowService.toggleWindow();
  }
}
