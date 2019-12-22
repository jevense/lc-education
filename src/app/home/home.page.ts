import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IonContent, IonInfiniteScroll, IonRefresher, ModalController, PickerController} from '@ionic/angular';
import {HomeService} from '../service/home.service';
import {PickerService} from 'ng-zorro-antd-mobile';
import {ScrollDetail} from '@ionic/core';
import {topMenus, yearList} from '@data/common-data';
import {YearItem} from '@data/interface';
import {Router} from '@angular/router';
import {AreaListComponent} from '../area-list/area-list.component';


@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

    slideOpts = {
        initialSlide: 1,
        speed: 400
    };
    carousel;
    topMenus = topMenus;
    page = 0;
    items;
    yearList: YearItem[] = yearList;
    value = [];
    name = '选择';
    top = false;

    @ViewChild(IonContent, {static: true})
    private content: IonContent;
    @ViewChild(IonInfiniteScroll, {static: true})
    private infiniteScroll: IonInfiniteScroll;
    @ViewChild(IonRefresher, {static: true})
    private ionRefresher: IonRefresher;

    constructor(
        private homeService: HomeService,
        private http: HttpClient,
        private modalController: ModalController,
        private pickerController: PickerController,
        private picker: PickerService,
        private router: Router,
    ) {
    }

    ngOnInit(): void {
        this.http.get('/api/carousel').subscribe(items => {
            console.log(items);
            this.carousel = items;
        });
        this.http.get('/api/list')
            .subscribe(items => {
                this.items = items;
            });
    }

    get shortName() {
        return this.homeService.shortName;
    }

    locate(param: { name: any; type: any; url: any; key: any }) {
        this.router.navigateByUrl('/browser').then();
    }

    toTop() {
        this.content.scrollToTop().then();
    }

    async choiceArea() {
        const modal = await this.modalController.create({
            component: AreaListComponent,
        });
        return await modal.present();
    }

    choiceYear() {
        this.picker.showPicker(
            {value: this.value, data: this.yearList},
            result => {
                this.name = result[1].label;
                this.value = result.map(it => it.value);
            });
    }

    showFab({detail: {scrollTop}}: CustomEvent<ScrollDetail>) {
        this.top = scrollTop > 400;
    }

    doInfinite() {
        this.http.get<object[]>('/api/list')
            .subscribe(items => {
                this.items.push(...items);
                this.infiniteScroll.complete().then();
            }, () => {
                this.infiniteScroll.complete().then();
            });
    }

    doRefresh() {
        setTimeout(() => {
            console.log('Async operation has ended');
            this.ionRefresher.complete().then();
        }, 2000);
    }
}
