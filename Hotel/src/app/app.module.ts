



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; //Importa Il modulo http
import { FormsModule } from '@angular/forms';
import { PrenListComponent } from './pren-list/pren-list.component';



@NgModule({
  declarations: [
    AppComponent,
    PrenListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
