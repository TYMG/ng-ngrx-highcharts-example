import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [FooterComponent],
  declarations: [FooterComponent]
})
export class FooterModule { }
