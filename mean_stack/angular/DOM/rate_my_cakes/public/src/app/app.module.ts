import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { CakesService } from './cakes.service';
import { CakeComponent } from './cake/cake.component';
import { RatingComponent } from './rating/rating.component'

@NgModule({
  declarations: [
    AppComponent,
    CakeComponent,
    RatingComponent
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
