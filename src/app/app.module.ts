import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StoreModule} from './store/store.module';
import { StoreComponent } from './store/store.component';
import { CartSummaryComponent } from './store/cartsummary.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { CheckoutComponent } from './store/checkout.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule,
    RouterModule.forRoot([
        { path: "store", component: StoreComponent },
        { path: "cart", component: CartSummaryComponent },
        { path: "checkout", component: CheckoutComponent },
        { path: "**", redirectTo: "/store"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
