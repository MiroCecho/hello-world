import { Component } from '@angular/core';
@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.css']
})
export class RendererComponent {
  curStatus = "draw";
  testClick=()=>{
    alert("Kruh");
  }
}
