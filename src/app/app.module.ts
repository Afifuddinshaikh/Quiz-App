import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ItemsComponent } from './items/items.component';
import { MatSliderModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AddchoicesComponent } from './addchoices/addchoices.component';
import { FormComponent } from './form/form.component';
import { NewwindowComponent } from './newwindow/newwindow.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ItemsComponent,
    AddchoicesComponent,
    FormComponent,
    NewwindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSliderModule,
    MatSliderModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
