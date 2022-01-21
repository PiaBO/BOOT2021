import { Component } from '@angular/core';
import { NavigationService } from './common/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizzeria-front-end';
  constructor(nav: NavigationService) {}
}
