import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserViewComponent } from './user-view/user-view.component';

const routes: Routes = [
  {
    path: "usuarios",
    component: UserListComponent
  },
  {
    path: "cadastrar-usuario",
    component: UserAddComponent
  },
  {
    path: "usuario/:id",
    component: UserViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
