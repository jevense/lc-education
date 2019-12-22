import {Component, OnInit} from '@angular/core';
import {PickerService} from 'ng-zorro-antd-mobile';
import {NameCodeItem, YearItem} from '@data/interface';
import {subjects, yearList} from '@data/common-data';
import {ModalController} from '@ionic/angular';
import {HomeService} from '../service/home.service';
import {AreaListComponent} from '../area-list/area-list.component';
import {PaperComponent} from './paper/paper.component';

@Component({
    selector: 'app-exercise',
    templateUrl: './exercise.page.html',
    styleUrls: ['./exercise.page.scss'],
})
export class ExercisePage implements OnInit {

    year = '年级';
    yearList: YearItem[] = yearList;
    value = [];
    firstPage = PaperComponent;
    items: NameCodeItem[] = subjects;

    constructor(
        private picker: PickerService,
        private homeService: HomeService,
        private modalController: ModalController,
    ) {
    }

    ngOnInit() {
    }

    get shortName() {
        return this.homeService.shortName;
    }

    choiceYear() {
        this.picker.showPicker(
            {value: this.value, data: this.yearList},
            result => {
                this.year = result[1].label;
                this.value = result.map(it => it.value);
            });
    }

    async choiceArea() {
        const modal = await this.modalController.create({
            component: AreaListComponent,
        });
        return await modal.present();
    }

}
