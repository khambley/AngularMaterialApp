import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientsNewComponent } from './clients-new/clients-new.component';

const routes: Routes = [
  {
    path: '',
    component: ClientListComponent
  },
  {
    path: 'new',
    component: ClientsNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
