import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {OrderConfirmPageRoutingModule} from './order-confirm-routing.module';

import {OrderConfirmPage} from './order-confirm.page';
import {AddressListComponent} from './address-list/address-list.component';
import {AddressItemComponent} from './address-item/address-item.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OrderConfirmPageRoutingModule,
    ],
    entryComponents: [AddressListComponent, AddressItemComponent],
    declarations: [OrderConfirmPage, AddressListComponent, AddressItemComponent]
})
export class OrderConfirmPageModule {
}
