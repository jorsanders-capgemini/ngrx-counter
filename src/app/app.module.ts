import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { IAppState } from './store/app-state.interface';
import { appStateReducer } from './store/app-state.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CountEffects } from './store/count/count.effects';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot<IAppState>(appStateReducer), EffectsModule.forRoot([CountEffects])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
