import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EbusinessSharedModule } from 'app/shared/shared.module';
import { FilesComponent } from './files.component';
import { FilesDetailComponent } from './files-detail.component';
import { FilesUpdateComponent } from './files-update.component';
import { FilesDeleteDialogComponent } from './files-delete-dialog.component';
import { filesRoute } from './files.route';

@NgModule({
  imports: [EbusinessSharedModule, RouterModule.forChild(filesRoute)],
  declarations: [FilesComponent, FilesDetailComponent, FilesUpdateComponent, FilesDeleteDialogComponent],
  entryComponents: [FilesDeleteDialogComponent]
})
export class EbusinessFilesModule {}
