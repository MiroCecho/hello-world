import { Component,OnInit, ViewChild } from '@angular/core';

const svgNs: string = "http://www.w3.org/2000/svg";

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.css']
})



export class RendererComponent implements OnInit {
  @ViewChild('svgContainer', { static: true }) public svgContainer: any;

  CreateSvgObject(name: string, j: any): HTMLElement {
    const nod: string = name;
    const e: Element = document.createElementNS(svgNs, nod);
    let key: string;
    // tslint:disable-next-line:forin
    for (key in j) {
      e.setAttribute(key, j[key]);
    }
    return (e as HTMLElement);
  }


  ngOnInit(): void {

  }
  
  curStatus = "draw";
  count:number=0;
  testClick=()=>{
    let el=this.CreateSvgObject("circle",{cx:50,cy:150, r:40,stroke:"black","stroke-width":"3",fill:"orange"});
    this.svgContainer.nativeElement.appendChild(el);
  }
}
