import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';

@NgModule({
  declarations: [AppComponent, PageOneComponent, PageTwoComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'page-one', component: PageOneComponent
      },
      {
        path: 'page-two', component: PageTwoComponent
      }
    ], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
