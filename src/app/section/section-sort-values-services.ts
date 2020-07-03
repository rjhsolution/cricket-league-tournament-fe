import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionSortValuesServices {

    getSortByValue(list,funvalu):any {
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
        function fngroupBy(list,keyGetter) {  
          const map = new Map();
            list.forEach((item) => {
                const key = keyGetter(item);
                const collection = map.get(key);
                const group = grouped.get(key);
                if (!collection) {
                    map.set(key, [group]);
                } else {
                    collection.push(group);
                }
            });
          return map;
        }
      const grouped = groupBy(list, funvalu);  
      return Array.from(fngroupBy(list,funvalu));
    }
}