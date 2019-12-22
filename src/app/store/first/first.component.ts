import {Component, OnInit, ViewChild} from '@angular/core';
import {IonRefresher} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {ProductItem} from '@data/interface';
import {productItems0} from '@data/common-data';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit {

    @ViewChild(IonRefresher, {static: true})
    private ionRefresher: IonRefresher;

    items: ProductItem[] = productItems0;

    slideOpts = {
        initialSlide: 1,
        speed: 400
    };
    carousel;

    constructor(
        private http: HttpClient,
    ) {
    }

    ngOnInit() {
        this.http.get('/api/carousel').subscribe(items => {
            console.log(items);
            this.carousel = items;
        });
    }

    doRefresh() {
        setTimeout(() => {
            console.log('Async operation has ended');
            this.ionRefresher.complete().then();
        }, 2000);
    }
}
