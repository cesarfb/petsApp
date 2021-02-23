import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DumbService } from 'src/app/shared/dumb.service';
import { AutorComponent } from '../autor/autor.component';
import { ComentsComponent } from '../coments/coments.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input() dataPost
  constructor(
    private dialog      : MatDialog,
    private _router     : Router
  ) { }

  verAutor(autorData) {
    const dialogRef = this.dialog.open(AutorComponent,
      {
        data: autorData.id
      }
    )
  }

  verComentarios(idPost) {
    const dialogRef = this.dialog.open(ComentsComponent,
      {
        data: idPost
      }
    )
  }

  filterValue(filter: string) {
    this._router.navigate([filter])
  }

}
