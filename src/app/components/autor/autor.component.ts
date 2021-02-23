import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DumbService } from 'src/app/shared/dumb.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.scss']
})
export class AutorComponent implements OnInit {

  dataUser
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private _dumbService: DumbService
  ) {  }

  async ngOnInit() {
    try {
      this.dataUser = await this._dumbService.getUserData(this.data);
    } catch (err) {
      console.log(err)
    }
  }

}
