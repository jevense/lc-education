import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    name: string;
    code: string;

    constructor() {
    }

    choiceProvince({name, code}) {
        this.name = name;
        this.code = code;
    }

    get shortName() {
        return this.name ? `[${this.name.substr(0, 2)}]` : '请选择省份';
    }
}
