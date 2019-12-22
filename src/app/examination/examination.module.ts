import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExaminationPageRoutingModule } from './examination-routing.module';

import { ExaminationPage } from './examination.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExaminationPageRoutingModule
  ],
  declarations: [ExaminationPage]
})
export class ExaminationPageModule {}
