import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './course/courses.service';
import { RendererComponent } from './renderer/renderer.component';
import { LevelManagerComponent } from './level-manager/level-manager.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WindowComponent } from './window/window.component';
import { MatSliderModule, MatSliderThumb } from '@angular/material/slider';
// import {  MatButtonModule,  MatFormFieldModule,  MatInputModule,  MatRippleModule } from '@angular/material';

// const modules = [
//   MatSlider,
//   MatSliderThumb
// ]


// @NgModule({
//   imports: [
//     MatSlider,
//     MatSliderThumb
//   ],
//   exports: [
//     MatSlider,
//     MatSliderThumb
//   ],
//   declarations:[
//     LevelManagerComponent,
//   ],
// })export class MaterialModule {};

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    RendererComponent,
    LevelManagerComponent,
    LayoutComponent,
    WindowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    // LevelManagerComponent,
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
