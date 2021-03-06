import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EbusinessSharedModule } from 'app/shared/shared.module';
import { BookingproductsComponent } from './bookingproducts.component';
import { BookingproductsDetailComponent } from './bookingproducts-detail.component';
import { BookingproductsUpdateComponent } from './bookingproducts-update.component';
import { BookingproductsDeleteDialogComponent } from './bookingproducts-delete-dialog.component';
import { bookingproductsRoute } from './bookingproducts.route';

@NgModule({
  imports: [EbusinessSharedModule, RouterModule.forChild(bookingproductsRoute)],
  declarations: [
    BookingproductsComponent,
    BookingproductsDetailComponent,
    BookingproductsUpdateComponent,
    BookingproductsDeleteDialogComponent
  ],
  entryComponents: [BookingproductsDeleteDialogComponent]
})
export class EbusinessBookingproductsModule {}
