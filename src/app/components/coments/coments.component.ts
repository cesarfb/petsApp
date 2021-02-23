import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DumbService } from 'src/app/shared/dumb.service';

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.scss']
})
export class ComentsComponent implements OnInit {

  comentsArr = []
  isLoading:boolean = true
  
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private _dumbService: DumbService
  ) { }

  async ngOnInit() {
    try {
      let coments:any = await this._dumbService.getComents(this.data);
      this.comentsArr = coments.data || []
      this.isLoading = false
    } catch (err) {
      console.log(err)
      this.isLoading = false
    }
  }
}
