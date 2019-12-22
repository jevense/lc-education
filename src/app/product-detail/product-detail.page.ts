import {Component, OnInit} from '@angular/core';
import {ModalController, ToastController} from '@ionic/angular';
import {ConfirmComponent} from './confirm/confirm.component';
import {HttpClient} from '@angular/common/http';
import {ProductItem} from '@data/interface';
import {Router} from '@angular/router';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.page.html',
    styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

    id: string;

    slideOpts = {
        initialSlide: 1,
        speed: 400
    };

    carousel;
    item: ProductItem = {
        id: '2',
        name: '高职综合单招综合素质专项题库2',
        cover: '',
        count: 1,
        price: 22
    };

    constructor(
        private http: HttpClient,
        private modalController: ModalController,
        private toastController: ToastController,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.http.get('/api/carousel1').subscribe(items => {
            console.log(items);
            this.carousel = items;
        });
    }

    async showModal(type) {
        const {id} = this;
        const modal = await this.modalController.create({
            component: ConfirmComponent,
            componentProps: {type, id}
        });
        return await modal.present();
    }

    async addToCart() {
        const toast = await this.toastController.create({
            message: '添加成功，在购物车等亲～',
            position: 'middle',
            duration: 2000
        });
        toast.present().then();
    }


    buy() {
        this.router.navigateByUrl('/order-confirm').then();
    }
}
