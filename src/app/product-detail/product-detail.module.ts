import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ProductDetailPageRoutingModule} from './product-detail-routing.module';

import {ProductDetailPage} from './product-detail.page';
import {ConfirmComponent} from './confirm/confirm.component';
import {StepperModule} from 'ng-zorro-antd-mobile';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDetailPageRoutingModule,
    StepperModule
  ],
    entryComponents: [ConfirmComponent],
    declarations: [ProductDetailPage, ConfirmComponent]
})
export class ProductDetailPageModule {
}
