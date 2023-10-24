import { Component } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css'],
})
export class MyButtonComponent {
  title = 'Test title';
  count = 0;
  myTestMethod() {
    this.count = this.count + 1;
  }
}
