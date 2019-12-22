import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-address-item',
    templateUrl: './address-item.component.html',
    styleUrls: ['./address-item.component.scss'],
})
export class AddressItemComponent implements OnInit {

    constructor(
        private modalController: ModalController,
    ) {
    }

    ngOnInit() {
    }

    close() {
        this.modalController.dismiss({
            dismissed: true
        }).then();
    }

    save() {

    }
}
