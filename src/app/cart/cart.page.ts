import {Component, OnInit} from '@angular/core';
import {ProductItem} from '@data/interface';
import {CheckboxChangeEventDetail} from '@ionic/core';
import {productItems} from '@data/common-data';


@Component({
    selector: 'app-cart',
    templateUrl: './cart.page.html',
    styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

    private isEdit = false;

    items: ProductItem[] = productItems;

    constructor() {
    }

    ngOnInit() {
    }

    get operationName() {
        return this.isEdit ? '编辑' : '完成';
    }

    get total() {
        return this.items
            .filter(it => it.checked)
            .reduce((pr, cu) => pr + cu.price * cu.count, 0);
    }

    toggle() {
        this.isEdit = !this.isEdit;
    }

    changeAll({detail: {checked}}: CustomEvent<CheckboxChangeEventDetail>) {
        this.items.forEach(it => it.checked = checked);
    }

    delete(id: string) {
        this.items = this.items.filter(it => it.id !== id);
    }

    deleteBatch() {
        this.items = this.items.filter(it => !it.checked);
    }

    favorite() {

    }
}
