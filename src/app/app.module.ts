import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './course/courses.service';
import { RendererComponent } from './renderer/renderer.component';
import {MatIconModule} from '@angular/material/icon';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WindowComponent } from './window/window.component';
import { MatSliderModule, MatSliderThumb } from '@angular/material/slider';
import { LevelManagerV2Component } from './level-manager-v2/level-manager-v2.component';
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatListModule} from '@angular/material/list';
import { WindowService } from './window.service';
// import {  MatButtonModule,  MatFormFieldModule,  MatInputModule,  MatRippleModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    RendererComponent,
    // LevelManagerComponent,
    LayoutComponent,
    WindowComponent,
    LevelManagerV2Component,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatListModule,
    // LevelManagerComponent,
  ],
  providers: [CoursesService,WindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
