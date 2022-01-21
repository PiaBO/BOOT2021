import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './main/menu/menu.component';

// PrimeNG
import { MessageModule } from 'primeng/message';
import { TabMenuModule } from 'primeng/tabmenu';
import { IngredientModule } from './ingredient/ingredient.module';
import { PizzaModule } from './pizza/pizza.module';
import { CommentModule } from './comment/comment.module';
import { OrdersModule } from './orders/orders.module';
import { UserModule } from './user/user.module';
import { FooterComponent } from './main/footer/footer.component';
import { ERROR_LEVEL, LoggerService } from 'src/lib/my-core/services/logger.service';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MessageModule,
    TabMenuModule,
    PizzaModule,
    CommentModule,
    OrdersModule,
    UserModule,
    HttpClientModule,

  ],
  providers: [
    LoggerService,
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL  }  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
