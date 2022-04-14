import { Component, OnInit } from '@angular/core';
import { HttpService } from './features/agencias/services/http.service';
import { StorageService } from './features/agencias/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isloading: boolean = false;

  constructor(private storage: StorageService){}

  ngOnInit(){
    this.isloading = true;
    this.storage.loading.subscribe(res => {
      this.isloading = res;
      console.log(res);
    });
  }
}
