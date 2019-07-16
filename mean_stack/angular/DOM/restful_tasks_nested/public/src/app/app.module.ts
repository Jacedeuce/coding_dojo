import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TasksService } from './tasks.service'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }