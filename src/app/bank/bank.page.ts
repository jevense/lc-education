import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {topMenus1, yearList} from '@data/common-data';
import {PickerService} from 'ng-zorro-antd-mobile';
import {YearItem} from '@data/interface';
import {Router} from '@angular/router';

@Component({
    selector: 'app-bank',
    templateUrl: './bank.page.html',
    styleUrls: ['./bank.page.scss'],
})
export class BankPage implements OnInit {

    slideOpts = {
        initialSlide: 1,
        speed: 400
    };
    carousel;
    topMenus = topMenus1;

    constructor(
        private http: HttpClient,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.http.get('/api/carousel').subscribe(items => {
            this.carousel = items;
        });
    }

    locate(item) {
        this.router.navigateByUrl('/exercise').then();
    }
}
