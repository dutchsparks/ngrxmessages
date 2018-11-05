import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { messageReducer } from './reducers/message.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      message: messageReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
