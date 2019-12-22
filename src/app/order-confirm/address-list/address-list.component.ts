import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {AddressItemComponent} from '../address-item/address-item.component';

@Component({
    selector: 'app-address-list',
    templateUrl: './address-list.component.html',
    styleUrls: ['./address-list.component.scss'],
})
export class AddressListComponent implements OnInit {

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

    async add() {
        const modal = await this.modalController.create({
            component: AddressItemComponent,
        });
        return await modal.present();
    }
}
