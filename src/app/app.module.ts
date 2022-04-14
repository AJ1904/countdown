import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountDownComponent } from './count-down/count-down.component';
import { CountDownIndoreComponent } from './count-down-indore/count-down-indore.component';

@NgModule({
  declarations: [
    AppComponent,
    CountDownComponent,
    CountDownIndoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
