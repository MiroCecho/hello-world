import { Component } from '@angular/core';

@Component({
  selector: 'app-level-manager',
  templateUrl: './level-manager.component.html',
  styleUrls: ['./level-manager.component.css']
})
export class LevelManagerComponent {
  layers = [
    { name: 'Vrstva 1', visible: true, opacity: 100, color: '#000000' },
    { name: 'Vrstva 2', visible: true, opacity: 100, color: '#ff0000' }
  ];
}
