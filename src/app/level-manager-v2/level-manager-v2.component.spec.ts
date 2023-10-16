import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelManagerV2Component } from './level-manager-v2.component';

describe('LevelManagerV2Component', () => {
  let component: LevelManagerV2Component;
  let fixture: ComponentFixture<LevelManagerV2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LevelManagerV2Component]
    });
    fixture = TestBed.createComponent(LevelManagerV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
