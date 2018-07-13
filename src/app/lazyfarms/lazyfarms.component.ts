import { Component, OnInit } from '@angular/core';
import {DbService} from '../db.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-lazyfarms',
  templateUrl: './lazyfarms.component.html',
  styleUrls: ['./lazyfarms.component.css']
})

export class LazyfarmsComponent implements OnInit {
  farms = [];
  public detailFarmInfo;
  constructor(private _router: Router, private _dbservice: DbService) { }

  ngOnInit() {
    this.farms = this._dbservice.getLazyFarms();
    console.log('lazyFarms', this.farms);
  }
  displayDetailFarm(id) {
    this._router.navigate(['/lazydetail', id]);
      }

}
