import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CakesService } from './cakes.service'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CakeComponent } from './cake/cake.component'

@NgModule({
  declarations: [
    AppComponent,
    CakeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CakesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
