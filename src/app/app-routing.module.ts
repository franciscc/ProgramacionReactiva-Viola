import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './login/components/signin/signin.component';
import { MainViewComponent } from './views/main-view/main-view.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component: SigninComponent},
  {path: 'dashboard', component: MainViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
