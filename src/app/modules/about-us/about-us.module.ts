import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutUs2Component } from './about-us-2/about-us-2.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    AboutUs2Component
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ],
  exports:[],
  providers: [],
})
export class AboutUsModule { }
