import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EbusinessSharedModule } from 'app/shared/shared.module';
import { ChercheComponent } from './cherche.component';
import { ChercheDetailComponent } from './cherche-detail.component';
import { ChercheUpdateComponent } from './cherche-update.component';
import { ChercheDeleteDialogComponent } from './cherche-delete-dialog.component';
import { chercheRoute } from './cherche.route';

@NgModule({
  imports: [EbusinessSharedModule, RouterModule.forChild(chercheRoute)],
  declarations: [ChercheComponent, ChercheDetailComponent, ChercheUpdateComponent, ChercheDeleteDialogComponent],
  entryComponents: [ChercheDeleteDialogComponent]
})
export class EbusinessChercheModule {}
