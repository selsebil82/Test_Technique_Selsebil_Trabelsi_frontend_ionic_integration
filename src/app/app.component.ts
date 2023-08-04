import { Component, enableProdMode } from '@angular/core';

// Enable production mode
enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEndApp';
}
