import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {ThirdComponent} from './third/third.component';
import {ForthComponent} from './forth/forth.component';

@Component({
    selector: 'app-store',
    templateUrl: './store.page.html',
    styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

    firstPage = FirstComponent;
    secondPage = SecondComponent;
    thirdPage = ThirdComponent;
    forthPage = ForthComponent;

    constructor(
        private router: Router,
        private modalController: ModalController,
    ) {
    }

    ngOnInit() {
    }
}
