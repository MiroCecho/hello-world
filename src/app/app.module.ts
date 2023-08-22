import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './course/courses.service';
import { RendererComponent } from './renderer/renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    RendererComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
