import { Component, Input, OnInit } from '@angular/core';
import { RoutesService } from '@features/routes/service/routes.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-routes-list',
  templateUrl: './routes-list.component.html',
  styleUrls: ['./routes-list.component.scss']
})
export class RoutesListComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = ['id', 'start', 'end', 'arrival_date', 'stops', 'menu'];

  constructor(
    private routesService: RoutesService
  ) { }

  ngOnInit(): void {
    this.initDataSource();
  }

  initDataSource() {
    this.routesService.getRoutes().pipe(
      map(routes => this.dataSource = routes)
    ).subscribe();
  }

  openModal() {

  }
}
