import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Reservation } from 'src/app/api/model/reservation.model';

const RESERVATION_DATA: Reservation[] = [
  {
    reservation_id: 1,
    email: 'bielson94@gmail.com'
  },
  {
    reservation_id: 2,
    email: 'example@onet.pl'
  },
  {
    reservation_id: 3,
    email: 'pysia@wp.pl'
  }
];


@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})


export class ReservationListComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = ['id', 'email' ,'menu'];
  selectedRow: Reservation;

  constructor() {

    this.selectedRow = {
      reservation_id: 0,
      email: ''
    }

  }

  onRowClicked(row: any) {
    console.log(this.selectedRow);
    this.selectedRow = row;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Reservation>(RESERVATION_DATA);

  }

}
