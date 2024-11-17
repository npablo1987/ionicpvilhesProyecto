import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerestudiantesPageRoutingModule } from './verestudiantes-routing.module';

import { VerestudiantesPage } from './verestudiantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerestudiantesPageRoutingModule
  ],
  declarations: [VerestudiantesPage]
})
export class VerestudiantesPageModule {}
