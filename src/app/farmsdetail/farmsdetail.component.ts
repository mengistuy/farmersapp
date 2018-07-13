import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-farmsdetail',
  templateUrl: './farmsdetail.component.html',
  styleUrls: ['./farmsdetail.component.css']
})
export class FarmsdetailComponent implements OnInit {
  farms = [];

  constructor(private _router: Router, private _acRoute: ActivatedRoute, private _dbService: DbService) { }
public farmId;
public FarmName;
public produce;
  ngOnInit() {
    const id = this._acRoute.snapshot.paramMap.get('id');
    this.farmId = id;
    const myFarmInfo = this._dbService.getFarm(id);
    console.log('dddd', myFarmInfo[0].Farm);
    this.FarmName = myFarmInfo[0].Farm;
    this.produce = myFarmInfo[0].produce;

     console.log(' my name: ' + this.FarmName);
     console.log(' my id: ' + this.produce);
  }
  displayDetailFarm(farm) {
    console.log(farm._id);
   // this._router.navigate(['/detail', farm._id]);
      }

}
