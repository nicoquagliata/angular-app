import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    MatGridListModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class MaterialModule { }
