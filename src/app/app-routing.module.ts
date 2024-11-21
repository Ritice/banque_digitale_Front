import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './composants/client/client.component';
import { CompteComponent } from './composants/compte/compte.component';
import { NewClientComponent } from './composants/new-client/new-client.component';

const routes: Routes = [
  {path:"clients", component:ClientComponent},
  {path:"comptes",component:CompteComponent},
  {path:"new-client",component:NewClientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
