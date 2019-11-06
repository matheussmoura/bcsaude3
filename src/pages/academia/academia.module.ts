import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcademiaPage } from './academia';

@NgModule({
  declarations: [
    AcademiaPage,
  ],
  imports: [
    IonicPageModule.forChild(AcademiaPage),
  ],
})
export class AcademiaPageModule {}
