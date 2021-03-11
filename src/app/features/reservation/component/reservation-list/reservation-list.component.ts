import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ReservationService } from '@features/reservation/service/reservation.service';
import { Reservation } from 'src/app/api/model/reservation.model';
import { ReservationEditComponent } from '../reservation-edit/reservation-edit.component';

const RESERVATION_DATA: Reservation[] = [
  {
    reservation_id: 1,
    fromCity: "Rzeszów",
    toCity: "Przemyśl"
  },
  {
    reservation_id: 2,
    fromCity: "Przemyśl",
    toCity: "Kraków"
  }
];


@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})



export class ReservationListComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = ['reservation_id', 'fromCity', 'toCity' ,'menu'];
  selectedRow: Reservation;

  constructor(
    private dialog: MatDialog,
    private reservationService: ReservationService
  ) {

    this.selectedRow = {
      reservation_id: 0,
      fromCity: "",
      toCity: ""
    }


  }

  onRowClicked(row: any) {
    console.log(this.selectedRow);
    this.selectedRow = row;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Reservation>(RESERVATION_DATA);
  }

  openEditReservationModal() {
    this.dialog.open(ReservationEditComponent, {
      data: this.selectedRow,
      disableClose: true
    })
  }

}
