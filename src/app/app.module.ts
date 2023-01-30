import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { SidenavModule } from './core/components/sidenav/sidenav.module';
import { ToolbarModule } from './core/components/toolbar/toolbar.module';
import { LoaderModule } from './core/components/loader/loader.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		SidenavModule,
		ToolbarModule,
		LoaderModule,
	],
	providers: [
		{
			provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
			useValue: { appearance: 'outline' },
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
