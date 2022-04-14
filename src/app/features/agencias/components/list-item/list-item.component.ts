import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgencyModel } from '../../interfaces/agency.interface';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() item!: AgencyModel;
  
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  viewMap(item: AgencyModel) {
    const modal = this.modalService.open(MapComponent);
    modal.componentInstance.item = item;

  }

}
