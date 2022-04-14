import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AgencyModel } from '../../interfaces/agency.interface';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() item!: AgencyModel;
  center: google.maps.LatLng = new google.maps.LatLng(0, 0);
  position: google.maps.LatLng = new google.maps.LatLng(0, 0);
  label: any = {};
  options: any = {};
  title: string = '';

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    const lantLong = new google.maps.LatLng(
      this.item.lon,
      this.item.lat
    );
    this.center = lantLong;
    this.position = lantLong;
    this.label = {
      color: 'black',
      text: this.item.agencia,
      fontWeight: 'bold',
      fontSize: '12px',
    };
    this.title = this.item.agencia;
    this.options = {
      animation: google.maps.Animation.DROP,
      icon: '/assets/logos/place.png',
    };
  }

}
