import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LunchPage } from './lunch.page';

import { LunchPageRoutingModule } from './lunch-routing.module';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LunchPageRoutingModule,
    SharedModule,
  ],
  declarations: [LunchPage],
})
export class LunchPageModule {}
