import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view/main-view.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [
    MainViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardModule
  ]
})
export class ViewsModule { }
