import { Injectable } from '@angular/core';
import { delay, Observable, ReplaySubject } from 'rxjs';
import { AgencyModel } from '../interfaces/agency.interface';

@Injectable({
  providedIn: "root"
})
export class StorageService {
  //data = new ReplaySubject<AgencyModel[]>();
  loading = new ReplaySubject<boolean>();

  constructor() { }

  getAll():AgencyModel[]{
    const agencies = localStorage.getItem("data");
    if(agencies){
      return JSON.parse(agencies) as AgencyModel[];
    }
    return [];
  }

  register(data:AgencyModel){
    return new Observable(observer => {
      const agencies = this.getAll();
      agencies.splice(data.id-1,1,data);
      localStorage.setItem("data", JSON.stringify(agencies));
      observer.next(true);
    }).pipe(delay(1500));
  }

  get(id:number){
    return this.getAll().find((item, index) => index+1 == id ) as AgencyModel;
  }

  setData(data: AgencyModel[]){
    localStorage.setItem("data", JSON.stringify(data));
  }


}
