import { Component } from '@angular/core';
@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.css']
})
export class RendererComponent {
  curStatus = "draw";
  count:number=0;
  testClick=()=>{
    let el=document.createElement("button");
    el.setAttribute("value","testík");
    
  }
}
