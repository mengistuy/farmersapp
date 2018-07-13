import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  farms = [{_id: 1,  Farm: ' Natural Prairie', produce: ['lettuce', 'tomato']},
{_id: 2 , Farm: ' Robinwood Farm', produce: ['corn', 'wheat']},
{_id: 3 , Farm: ' Nightfall Farm', produce: ['bean', 'teff']}];
  public getFarms() {
      return this.farms;
  }
  public getFarm(id) {
    // console.log(typeof id);
    // console.log('find' , this.farms.find(farm => farm._id === id));
    // console.log('filter' , this.farms.filter(farm => farm._id === Number.parseInt(id)));
   return this.farms.filter(farm => farm._id === Number.parseInt(id));
  }

  public getLazyFarms() {
    return this.farms.map(farm => { const myfarm = { _id: farm._id, Farm: farm.Farm}; return myfarm; });
  }
  public getLazyFarmDetail(id) {
    return this.farms.map(farm => farm.produce);
  }
  constructor() { }
}
