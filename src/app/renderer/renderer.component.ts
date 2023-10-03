import { Component,OnInit, ViewChild,Inject, inject } from '@angular/core';

import { DOCUMENT } from '@angular/common';
const svgNs: string = "http://www.w3.org/2000/svg";

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.css']
})



export class RendererComponent implements OnInit {
  @ViewChild('svgContainer', { static: true }) public svgContainer: any;

  constructor(@Inject(DOCUMENT) private document:Document){

  }


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
    const rect= this.CreateSvgObject("rect",{
      x:200,y:200,width:280,height:120,style:"fill:green;stroke:red;stroke-width:3;opacity:0.3"
    })
    const grf= this.document.getElementById("grf");
    if(grf){
      //grf.appendChild(rect)
      grf.insertBefore(rect,grf.firstChild)
    }
  }
  
  curStatus = "draw";
  count:number=0;
  testClick=(e:any)=>{
    let t:HTMLElement=e.target;
    let x=e.clientX;
    let y=e.clientY;   
    let prep=false;
    let elems=[];
    elems.push(t);
    while (prep===false){
      console.log(t.outerHTML);
      t.style.pointerEvents="none"
      t= this.document.elementFromPoint(x,y) as any;
      if(t.nodeName.toLocaleLowerCase()=="svg"){
        prep=true;
      } else{
        elems.push(t);
      } 
    }
    elems.forEach(e => {
      e.style.pointerEvents="";
    });
  }
}
