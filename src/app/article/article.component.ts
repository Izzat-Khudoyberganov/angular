import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  @Input('title') title!: string;
  @Input('text') text!: string;

  @Output() myTextChange = new EventEmitter<string>();

  testText() {
    this.myTextChange.emit(this.text);
  }
}
