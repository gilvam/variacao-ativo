import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLinkActive } from '@angular/router';
import { AppRoutingModule } from '../../../app-routing.module';

@NgModule({
	declarations: [SidenavComponent],
	exports: [SidenavComponent],
	imports: [CommonModule, AppRoutingModule, RouterLinkActive, MatSidenavModule],
})
export class SidenavModule {
}
