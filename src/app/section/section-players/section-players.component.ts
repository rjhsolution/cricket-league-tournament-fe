import { Component, OnInit } from '@angular/core';
import { SectionTeamsService } from '../section-teams.service';

@Component({
  selector: 'app-section-players',
  templateUrl: './section-players.component.html',
  styleUrls: ['./section-players.component.less']
})
export class SectionPlayersComponent implements OnInit {
  playerslist: any;
  constructor(private sectionteamsservice: SectionTeamsService) { }

  ngOnInit(): void {
    this.sectionteamsservice.reqGetAllPlayersList().subscribe((res: any)=>{
      this.playerslist = res;
    }) 
  }

}
