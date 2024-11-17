import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerestudiantesPage } from './verestudiantes.page';

const routes: Routes = [
  {
    path: '',
    component: VerestudiantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerestudiantesPageRoutingModule {}
