import {Component, OnInit} from '@angular/core';
import {ComingSoonComponent} from '../coming-soon/coming-soon.component';

@Component({
    selector: 'app-course',
    templateUrl: './course.page.html',
    styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {

    firstPage = ComingSoonComponent;

    constructor() {
    }

    ngOnInit() {
    }

}
