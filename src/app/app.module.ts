import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyButtonComponent } from './components/my-button/my-button.component';
import { CartComponent } from './cart/cart.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [AppComponent, MyButtonComponent, CartComponent, ArticleComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MyButtonComponent],
})
export class AppModule {}
