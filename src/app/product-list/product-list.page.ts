import {Component, OnInit} from '@angular/core';
import {ProductItem} from '@data/interface';
import {productItems} from '@data/common-data';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.page.html',
    styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

    items: ProductItem[] = productItems;

    constructor() {
    }

    ngOnInit() {
    }

}
