import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.components.html'
})
export class HeaderComponent{
  @Output() showBlock = new EventEmitter<any>();

  onChoose(choice: string) {
    this.showBlock.emit(choice);
  }
}
