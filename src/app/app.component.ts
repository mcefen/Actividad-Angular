import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
@Component({
  imports: [
    HomeComponent,
    RouterModule,
  ],
    selector: 'app-root',
    standalone: true,
    template:``,
})
export class AppComponent {
  title: string;
  constructor(){
  this.title = 'homes';
}
}
