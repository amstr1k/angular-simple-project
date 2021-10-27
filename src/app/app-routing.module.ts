import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientComponent } from './components/сlients-table/client.component';
import { ClientPageComponent } from './components/client-page/client-page.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: ClientComponent },
      { path: 'client/:id', component: ClientPageComponent },
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
