import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {StorePageRoutingModule} from './store-routing.module';

import {StorePage} from './store.page';
import {SuperTabsModule} from '@ionic-super-tabs/angular';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {ThirdComponent} from './third/third.component';
import {ForthComponent} from './forth/forth.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StorePageRoutingModule,
        SuperTabsModule,
    ],
    entryComponents: [FirstComponent, SecondComponent, ThirdComponent, ForthComponent],
    declarations: [StorePage, FirstComponent, SecondComponent, ThirdComponent, ForthComponent]
})
export class StorePageModule {
}
