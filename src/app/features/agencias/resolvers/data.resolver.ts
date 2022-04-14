import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AgencyModel } from '../interfaces/agency.interface';
import { HttpService } from '../services/http.service';

@Injectable()
export class DataResolver implements Resolve<AgencyModel[]> {
    constructor(private http: HttpService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): AgencyModel[] | Observable<AgencyModel[]> | Promise<AgencyModel[]> {
        return this.http.getAgencies();
    }


}