import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { ContainerComponent } from './modules/container/container.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {path:'', component: ContainerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
