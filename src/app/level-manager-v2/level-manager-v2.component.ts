import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

export interface TableData{
  id: number;
  name: string;
  visible: boolean;
  opacity: number;
  color: string;
  instance: number;
}

const DataTable: TableData[] = [
  { id:1, name: 'H2 PRAZDNA', visible: true, opacity: 100, color: '#000000', instance: 27 },
  { id:2, name: 'Siet blokov', visible: true, opacity: 100, color: '#ff0000' , instance: 27 },
  { id:3, name: 'Popis rozvodov', visible: true, opacity: 100, color: '#ff0000' , instance: 27 },
  { id:4, name: 'Peciatka', visible: true, opacity: 100, color: '#ff0000' , instance: 27 },
  { id:5, name: 'Odkazy', visible: true, opacity: 100, color: '#ff0000' , instance: 27 }
];

@Component({
  selector: 'app-level-manager-v2',
  templateUrl: './level-manager-v2.component.html',
  styleUrls: ['./level-manager-v2.component.css'],
})
export class LevelManagerV2Component {
  formatLabel(value: number):string{
    if (value >= 1) {
      return Math.round(value/1) + '';
    }
    return `${value}`;
  }
  displayedColumns: string[] = ['id','name','visible','opacity','color','instance'];
  dataSource = DataTable;
  clickedRows = new Set<TableData>();
}
