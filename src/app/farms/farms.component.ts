import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css']
})
export class FarmsComponent implements OnInit {
  farms = [];
  constructor(private _farms: DbService, private _router: Router) { }

  ngOnInit() {
    this.farms = this._farms.getFarms();
  }

  displayDetailFarm(id) {
    this._router.navigate(['/detail', id]);
      }

}
