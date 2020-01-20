import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListVesselsComponent} from './components/list-vessels/list-vessels.component';
import {VesselsDetailsComponent} from './components/vessels-details/vessels-details.component';


const routes: Routes = [
  {path: '', redirectTo: 'vessels', pathMatch: 'full'},
  {path: 'vessels', component: ListVesselsComponent, data: {animation: 'isLeft'}},
  {path: 'vessels/:id', component: VesselsDetailsComponent, data: {animation: 'isRight'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
