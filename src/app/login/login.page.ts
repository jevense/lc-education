import {Component, OnInit} from '@angular/core';
import {Storage} from '@ionic/storage';
import {IonInput, ModalController, NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(
        private modalController: ModalController,
        private navController: NavController,
        private router: Router,
        private storage: Storage
    ) {
    }

    ngOnInit() {
    }

    login(username: IonInput, password: IonInput) {
        if (username.value.length === 0) {
            alert('请输入账号');
        } else if (password.value.length === 0) {
            alert('请输入密码');
        } else {
            // this.storage.set('username', username.value).then();
            this.storage.set('isAuth', true).then(() => {
                this.navController.pop().then();
            });
        }
    }
}
