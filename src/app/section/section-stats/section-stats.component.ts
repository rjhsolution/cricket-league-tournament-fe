import { Component, OnInit } from '@angular/core';
import { SectionResultsService } from '../section-results.service';

@Component({
  selector: 'app-section-stats',
  templateUrl: './section-stats.component.html',
  styleUrls: ['./section-stats.component.less']
})
export class SectionStatsComponent implements OnInit {
  
  resultslist:any;

  constructor(private sectionresultsservice:SectionResultsService) { }

  ngOnInit(): void {
    this.sectionresultsservice.reqGetResultsList().subscribe((res: any)=>{
      this.resultslist = res;
    }) 
  }

}
