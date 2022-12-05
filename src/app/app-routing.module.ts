import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ExampleComponent } from './example/example.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
