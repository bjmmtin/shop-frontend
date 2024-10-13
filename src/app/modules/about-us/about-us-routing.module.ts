import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutUs2Component } from './about-us-2/about-us-2.component';

const routes: Routes = [
  {
    path:'',
    component: AboutUsComponent,
  },
  {
    path: 'about-us-2',
    component: AboutUs2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
