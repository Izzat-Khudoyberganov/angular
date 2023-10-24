import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  @Input() title!: string;
  @Output() myTitleChange = new EventEmitter<string>();
  testFn() {
    this.myTitleChange.emit(this.title);
  }
}
