import { Location } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DumbService } from '../../shared/dumb.service';

@Component({
  selector   : 'app-main',
  templateUrl: './main.component.html',
  styleUrls  : ['./main.component.scss']
})
export class MainComponent implements OnInit {

  postArr
  tag

  constructor(
    private _dumbService   : DumbService,
    private _activatedRoute: ActivatedRoute,
    private _location      : Location
  ) {
    _activatedRoute.paramMap.subscribe(value => {
        this.tag = value.get('id');
        this.ngOnInit();
    })
  }

  async ngOnInit() {
    try {
      let arrData:any = await this._dumbService.getPosts(this.tag);
      this.postArr = arrData.data || []
    } catch (err) {
      console.log(err)
    }
  } 

  goBack() {
    this._location.back();
  }

}
