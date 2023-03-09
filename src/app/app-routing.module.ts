import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddchoicesComponent } from './addchoices/addchoices.component';
import { FormComponent } from './form/form.component';
import { NewwindowComponent } from './newwindow/newwindow.component';

const routes: Routes = [
  {
    path:'Addchoices',
    component:AddchoicesComponent
  },
  {
    path:'form',
    component:FormComponent
  },
  {
    path:'project',
    component:NewwindowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
