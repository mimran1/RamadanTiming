import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './components/sample/sample.component';


const routes: Routes = [
  { path: '', redirectTo:'/sample', pathMatch:'full'},
  { path: 'sample', component:SampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
