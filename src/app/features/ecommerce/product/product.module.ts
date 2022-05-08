import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ProductPage } from './product.page';

import { ProductPageRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPageRoutingModule,
  ],
  declarations: [ProductPage],
})
export class ProductPageModule {}
