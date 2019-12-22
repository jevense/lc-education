import {Component, OnInit} from '@angular/core';
import {ProductItem} from '@data/interface';
import {productItems} from '@data/common-data';
import {AlertController, ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {AddressListComponent} from './address-list/address-list.component';

@Component({
    selector: 'app-order-confirm',
    templateUrl: './order-confirm.page.html',
    styleUrls: ['./order-confirm.page.scss'],
})
export class OrderConfirmPage implements OnInit {
    items: ProductItem[] = productItems;

    constructor(
        private alertController: AlertController,
        private modalController: ModalController,
        private router: Router
    ) {
    }

    ngOnInit() {
    }

    get total() {
        return this.items
            .reduce((pr, cu) => pr + cu.price * cu.count, 0);
    }

    get count() {
        return this.items
            .reduce((pr, cu) => pr + cu.count, 0);
    }


    async pay() {
        const alert = await this.alertController.create({
            header: '购买成功!',
            message: '宝贝很快送到您的手中～～',
            buttons: [
                {
                    text: '确定',
                    handler: () => {
                        this.router.navigateByUrl('/main/tabs/store').then();
                    }
                }
            ]
        });
        await alert.present();
    }

    async addressList() {
        const modal = await this.modalController.create({
            component: AddressListComponent,
        });
        return await modal.present();
    }

}
