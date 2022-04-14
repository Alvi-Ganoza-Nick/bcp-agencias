import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { AgencyModel } from '../../interfaces/agency.interface';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  agencies: AgencyModel[] = [];

  constructor(private service: StorageService) {}

  ngOnInit(): void {
    this.agencies = this.service.getAll();
  }
}
