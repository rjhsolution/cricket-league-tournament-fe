import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { sectionTeamsComponent } from './section-teams/section-teams.component';
import { SectionPlayersComponent } from './section-players/section-players.component';
import { SectionResultsComponent } from './section-results/section-results.component';
import { SectionWinnersComponent } from './section-winners/section-winners.component';
import { SectionStatsComponent } from './section-stats/section-stats.component';

const routes: Routes = [
  {path:'Teams',component:sectionTeamsComponent},
  {path:'Players',component:SectionPlayersComponent},
  {path:'Results',component:SectionResultsComponent},
  {path:'Winner',component:SectionWinnersComponent},
  {path:'Stats',component:SectionStatsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionRoutingModule { }
