import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionRoutingModule } from './Section-routing.module';
import { sectionTeamsComponent } from './section-teams/section-teams.component';
import { SectionPlayersComponent } from './section-players/section-players.component';
import { SectionResultsComponent } from './section-results/section-results.component';
import { SectionWinnersComponent } from './section-winners/section-winners.component';
import { SectionStatsComponent } from './section-stats/section-stats.component';


@NgModule({
  declarations: [sectionTeamsComponent, SectionPlayersComponent, SectionResultsComponent, SectionWinnersComponent, SectionStatsComponent],
  imports: [
    CommonModule,
    SectionRoutingModule
  ],
  exports: [
    sectionTeamsComponent
  ]
})
export class SectionModule { }
