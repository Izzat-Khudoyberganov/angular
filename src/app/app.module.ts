import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BgDirective } from './directive/background.directive';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MyButtonComponent } from './components/my-button/my-button.component';
import { CartComponent } from './cart/cart.component';
import { ArticleComponent } from './article/article.component';
import { TestComponent } from './test/test.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    CartComponent,
    ArticleComponent,
    TestComponent,
    SidenavComponent,
    BgDirective,
    PagenotfoundComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
