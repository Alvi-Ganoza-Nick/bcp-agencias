import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map, Observable, tap } from 'rxjs';
import { AgencyModel, IAgencyResponse } from '../interfaces/agency.interface';
import { StorageService } from './storage.service';

@Injectable()
export class HttpService {
  constructor(private httpClient: HttpClient, private storage: StorageService) {}

  getAgencies(): Observable<AgencyModel[]> {
    this.storage.loading.next(true);
    return this.httpClient
      .get<IAgencyResponse[]>('/assets/data/agencias.json')
      .pipe(
        delay(1500),
        map((res: IAgencyResponse[]) =>
          res.map((item, index) => new AgencyModel(item, index + 1))
        ), 
        tap(res => {
          this.storage.setData(res);
          this.storage.loading.next(false);
        })
      );
  }

}
