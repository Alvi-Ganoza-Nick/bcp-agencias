import { NgModule } from "@angular/core";
import { ListComponent } from './views/list/list.component';
import { DetailComponent } from './views/detail/detail.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { HttpService } from './services/http.service';
//import { StorageService } from './services/storage.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from '../../core/core.module';
import { AgencyRoutingModule } from "./agency-routing.module";
import { AgencyComponent } from "./agency.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        AgencyRoutingModule
    ],
    exports: [],
    declarations: [
        ListComponent,
        DetailComponent,
        ListItemComponent,
        AgencyComponent
    ],
    providers: [
        HttpService
       // StorageService
    ]
})
export class AgencyModule{}