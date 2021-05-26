import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { CadastroDetailComponent } from './cadastro-detail/cadastro-detail.component'


const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent },
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detail/:id', component: CadastroDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
