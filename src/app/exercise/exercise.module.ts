import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ExercisePageRoutingModule} from './exercise-routing.module';

import {ExercisePage} from './exercise.page';
import {SuperTabsModule} from '@ionic-super-tabs/angular';
import {PaperComponent} from './paper/paper.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ExercisePageRoutingModule,
        SuperTabsModule
    ],
    entryComponents: [PaperComponent],
    declarations: [ExercisePage, PaperComponent]
})
export class ExercisePageModule {
}
