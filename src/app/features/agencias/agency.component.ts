import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-agency',
    templateUrl: './agency.component.html'
})
export class AgencyComponent implements OnInit{

    constructor(private router: ActivatedRoute){}

    ngOnInit(){
        /*Extraer data del resolver
        const data = this.router.snapshot.data;
        console.log(data);*/

        
    }
}