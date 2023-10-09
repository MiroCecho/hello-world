import { Component } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-level-manager',
  templateUrl: './level-manager.component.html',
  styleUrls: ['./level-manager.component.css'],
  standalone: true,
  imports: [MatSliderModule],
})
export class LevelManagerComponent {
  formatLabel(value: number):string{
    // if (value >= 5) {
    //   return Math.round(value/5) + '';
    // }
    return '${value}';
  }
  tableData = [
    { id:1, name: 'H2 PRAZDNA', visible: true, opacity: 100, color: '#000000', instance: 27 },
    { id:2, name: 'Siet blokov', visible: true, opacity: 100, color: '#ff0000' , instance: 27 },
    { id:3, name: 'Popis rozvodov', visible: true, opacity: 100, color: '#ff0000' , instance: 27 },
    { id:4, name: 'Peciatka', visible: true, opacity: 100, color: '#ff0000' , instance: 27 },
    { id:5, name: 'Odkazy', visible: true, opacity: 100, color: '#ff0000' , instance: 27 }
  ];
}
