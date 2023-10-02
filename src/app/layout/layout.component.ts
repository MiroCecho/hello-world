import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WindowComponent } from '../window/window.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent{

  @ViewChild('customContent') customContent!: ElementRef;
  @ViewChild('menuButton') menuButton!: ElementRef;

  isMobileMenuActive = false;

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    this.menuButton.nativeElement.classList.add('is-active');
    this.customContent.nativeElement.addEventListener('click', this.toggleMenu.bind(this));
  }

  toggleMenu(){
    this.isMobileMenuActive = !this.isMobileMenuActive;
    this.menuButton.nativeElement.classList.toggle('is-active');
  }

  // constructor(private dialog: MatDialog){

  // }

  // openWindow(){
  //   const dialogRef = this.dialog.open(WindowComponent,{
      
  //   });
  // }

  // rightMenu = () => {
  //   const baseName = 'custom-content';
  //   const base = document.getElementById(baseName);
  //   const err = () => {
  //     console.log(`Navigation content id="${baseName}" is missing!`);
  //   };
  //   if (!base) {
  //     err();
  //     return;
  //   }
  //   const menu_btn = base.querySelector('button.hamburger');
  //   const mobile_menu = document.getElementById('navigation-panel');
  //   if (!menu_btn || !mobile_menu) {
  //     err();
  //     return;
  //   }
  //   menu_btn.classList.add('is-active');
  //   mobile_menu.classList.add('is-active');
  //   menu_btn.classList.remove('hide');
  //   const events = () => {
  //     menu_btn.addEventListener('click', function () {
  //       menu_btn.classList.toggle('is-active');
  //       mobile_menu.classList.toggle('is-active');
  //     });
  //   };
  //   // drawingsList(mobile_menu, drawings);
  //   events();
  // };


}
