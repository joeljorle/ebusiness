import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EbusinessSharedModule } from 'app/shared/shared.module';
import { TourcategoryComponent } from './tourcategory.component';
import { TourcategoryDetailComponent } from './tourcategory-detail.component';
import { TourcategoryUpdateComponent } from './tourcategory-update.component';
import { TourcategoryDeleteDialogComponent } from './tourcategory-delete-dialog.component';
import { tourcategoryRoute } from './tourcategory.route';

@NgModule({
  imports: [EbusinessSharedModule, RouterModule.forChild(tourcategoryRoute)],
  declarations: [TourcategoryComponent, TourcategoryDetailComponent, TourcategoryUpdateComponent, TourcategoryDeleteDialogComponent],
  entryComponents: [TourcategoryDeleteDialogComponent]
})
export class EbusinessTourcategoryModule {}
