import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { PostComponent } from './components/post/post.component';
import { MainComponent } from './pages/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { AutorComponent } from './components/autor/autor.component';
import { ComentsComponent } from './components/coments/coments.component'
import { SpinnerComponent } from './shared/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    MainComponent,
    AutorComponent,
    ComentsComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
