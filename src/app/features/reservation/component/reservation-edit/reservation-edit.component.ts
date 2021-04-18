import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogClose, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReservationService } from '@features/reservation/service/reservation.service';
import { UsersService } from '@features/users/service/users.service';
import { filter, map, tap } from 'rxjs/operators';
import { Reservation, ReservationStatus } from 'src/app/api/model/reservation.model';
import { User } from 'src/app/api/model/user.model';

enum Action {
  NEW = 'new',
  EDIT = 'edit',
  //VIEW = 'view'
}

@Component({
  selector: 'app-reservation-edit',
  templateUrl: './reservation-edit.component.html',
  styleUrls: ['./reservation-edit.component.scss']
})

export class ReservationEditComponent implements OnInit {

  form!: FormGroup;
  actionTODO = Action.NEW;
  options!: any;
  //options!: Array<User[]>;
  //options = this.getUsers();

  getUserToForm() {
    return this.usersService.getUsers().pipe(
      //tap(response => console.log(response)),
      map((response: User) => this.options = response)
    ).subscribe();
  }

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private usersService: UsersService,
    private reservationService: ReservationService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {

    this.buildForm();
    if(this.data.reservation.hasOwnProperty('id')) {
      this.actionTODO = Action.EDIT;
      this.data.title = "Edytuj rezerwacje";
      this.pathFormData();
    }
    this.getUserToForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group(
      {
        from: ['', [Validators.required]],
        to: ['', [Validators.required]],
        status: [ReservationStatus.NEW, ],
        userId: [, [Validators.required]],
      }
    )
  }

  message = "Rezerwacja utworzona pomyślnie";

  openSnack() {
    this._snackBar.open(this.message, 'x', {
      duration: 2500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  onSave() {
    const formValue = this.form.value;
    if(this.actionTODO === Action.NEW) {
      this.reservationService.createReservation(formValue).subscribe(
        res => {
          res.message = this.message;
          this.openSnack();
        }
      );
    } else {
      const reservationId = this.data.reservation.id;
      this.reservationService.editReservation(reservationId, formValue).subscribe();
    }
  }

  private pathFormData(): void {
    this.form.patchValue({
      from: this.data.reservation.from,
      to: this.data.reservation.to,
      status: this.data.reservation.status,
      userId: Number(this.data.reservation.user.id)
    })
  }

}
