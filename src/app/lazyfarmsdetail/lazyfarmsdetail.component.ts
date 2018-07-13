import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { DbService } from '../db.service';
@Component({
  selector: 'app-lazyfarmsdetail',
  templateUrl: './lazyfarmsdetail.component.html',
  styleUrls: ['./lazyfarmsdetail.component.css']
})
export class LazyfarmsdetailComponent implements OnInit {

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
}
