import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit {

    @Input() type: string;

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

}
