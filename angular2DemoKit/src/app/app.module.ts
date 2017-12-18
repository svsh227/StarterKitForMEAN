import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestComponent } from './components/testComponents/test.component';
import { routes } from './app.routes';
import { HttpService } from './services/http.services';

@NgModule({
  declarations: [
    AppComponent, TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,  // for routing of your app
    RouterModule  // for <router-outlet>
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
