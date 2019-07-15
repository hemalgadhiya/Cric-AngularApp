import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {ScheduleComponent} from './schedule/schedule.component'
import{RankingComponent} from './ranking/ranking.component'

const routes: Routes = [
  { path: 'schedule', component: ScheduleComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'Ranking', component: RankingComponent },
];

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
