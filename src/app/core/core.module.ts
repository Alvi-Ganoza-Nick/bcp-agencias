import { NgModule } from "@angular/core";
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@NgModule({
    exports: [NavbarComponent],
    imports: [CommonModule],
    declarations: [NavbarComponent]
})
export class CoreModule{}