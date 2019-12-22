import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DelonMockModule} from '@delon/mock';
import * as MOCKDATA from '@mock';
import {environment} from '@env/environment';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {NgZorroAntdMobileModule} from 'ng-zorro-antd-mobile';
import {ServiceWorkerModule} from '@angular/service-worker';
import {IonicStorageModule} from '@ionic/storage';
import {SuperTabsModule} from '@ionic-super-tabs/angular';
import {ComingSoonComponent} from './coming-soon/coming-soon.component';
import {AreaListComponent} from './area-list/area-list.component';


const MOCKMODULE = !environment.production ? [DelonMockModule.forRoot({data: MOCKDATA})] : [];

@NgModule({
    declarations: [AppComponent, ComingSoonComponent, AreaListComponent],
    entryComponents: [ComingSoonComponent, AreaListComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(),
        IonicStorageModule.forRoot(),
        SuperTabsModule.forRoot(),
        AppRoutingModule,
        ...MOCKMODULE,
        BrowserAnimationsModule,
        FormsModule,
        NgZorroAntdMobileModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
