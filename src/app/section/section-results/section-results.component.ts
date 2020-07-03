import { Component, OnInit } from '@angular/core';
import { SectionMatchesService } from '../section-matches.service';

@Component({
  selector: 'app-section-results',
  templateUrl: './section-results.component.html',
  styleUrls: ['./section-results.component.less']
})
export class SectionResultsComponent implements OnInit {
  allmatcheslist:any;
  constructor(private sectionmatchesservice:SectionMatchesService) { }

  ngOnInit(): void {
    this.sectionmatchesservice.reqGetAllMatchesList().subscribe((res: any)=>{
      this.allmatcheslist = res;
    }) 
  }

}
