import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RecApp';
  loadedChoice = 'recipe';

  onNavigate(choice: string) {
    this.loadedChoice = choice;
  }
}
