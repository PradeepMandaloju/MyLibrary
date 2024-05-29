import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ManageComponent } from './manage/manage.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  
  {path:'',component:LoginComponent},
  {path:'admin',component:AdminComponent,
  children:[  
    {path:'home',component:HomeComponent},
    {path:'add',component:AddComponent},
    {path:'manage',component:ManageComponent}
  ]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
