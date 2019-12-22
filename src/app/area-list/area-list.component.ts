import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {HomeService} from '../service/home.service';
import {provinceList} from '@data/common-data';
import {ProvinceItem} from '@data/interface';

@Component({
    selector: 'app-area-list',
    templateUrl: './area-list.component.html',
    styleUrls: ['./area-list.component.scss'],
})
export class AreaListComponent implements OnInit {

    provinceItems: ProvinceItem[] = provinceList;

    constructor(
        private modalController: ModalController,
        private homeService: HomeService
    ) {
    }

    ngOnInit() {
    }

    close() {
        this.modalController.dismiss({
            dismissed: true
        }).then();
    }

    choiceArea(item: { code: string; name: string }) {
        this.homeService.choiceProvince(item);
        this.close();
    }
}
