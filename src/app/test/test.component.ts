import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  @Input() testTitle!: string;
  @Output() myTestTitle = new EventEmitter<string>();

  testTestFN() {
    this.myTestTitle.emit(this.testTitle);
  }
}
