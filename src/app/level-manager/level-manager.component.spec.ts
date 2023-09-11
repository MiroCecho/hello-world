import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelManagerComponent } from './level-manager.component';

describe('LevelManagerComponent', () => {
  let component: LevelManagerComponent;
  let fixture: ComponentFixture<LevelManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LevelManagerComponent]
    });
    fixture = TestBed.createComponent(LevelManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
