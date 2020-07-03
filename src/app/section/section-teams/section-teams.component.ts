import { Component, OnInit } from '@angular/core';
import { SectionTeamsService } from '../section-teams.service';
import { SectionSortValuesServices } from '../section-sort-values-services';

@Component({
  selector: 'app-section-teams',
  templateUrl: './section-teams.component.html',
  styleUrls: ['./section-teams.component.less']
})
export class sectionTeamsComponent implements OnInit {
  
  teamplayerslist: any;

  constructor(private sectionteamsservice: SectionTeamsService,private sectionsortvaluesservices: SectionSortValuesServices) { }
  
  ngOnInit(): void {
      this.sectionteamsservice.reqGetAllPlayersList().subscribe((res: any)=>{
        let rawteamplayerslist = res;
        let finarr = this.getFilterPlaying11(rawteamplayerslist);
        this.teamplayerslist = this.sectionsortvaluesservices.getSortByValue(finarr,plist => plist.country_name);
        console.log(this.teamplayerslist);
      })       
  }

  getFilterPlaying11(datalist){
    const grouped = groupBy(datalist, plist => plist.play_team);
      function groupBy(list, keyGetter) {
        const map = new Map();
          list.forEach((item) => {
              const key = keyGetter(item);
              const collection = map.get(key);
              if (!collection) {
                  map.set(key, [item]);
              } else {
                  collection.push(item);
              }
          });
        return map;
      }
    return Array.from(grouped)[0][1];
  }

}
