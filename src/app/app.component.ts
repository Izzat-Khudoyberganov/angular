import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myApp';
  cardTitle = '';
  articleText = '';
  carts = [
    { title: 'My first title' },
    { title: 'My second title' },
    { title: 'My third title' },
    { title: 'My fourth title' },
  ];

  articles = [
    {
      title: 'Lorem, ipsum dolor.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti officia odi ratione dignissimos corporis eaque nemo repudiandae magni? Animi adipisci sint dignissimos aut accusamus dolorem maxime quam veritatis consequuntur?',
    },
    {
      title: 'Lorem, ipsum dolor.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti officia odi ratione dignissimos corporis eaque nemo repudiandae magni? Animi adipisci sint dignissimos aut accusamus dolorem maxime quam veritatis consequuntur?',
    },
    {
      title: 'Lorem, ipsum dolor.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti officia odi ratione dignissimos corporis eaque nemo repudiandae magni? Animi adipisci sint dignissimos aut accusamus dolorem maxime quam veritatis consequuntur?',
    },
    {
      title: 'Lorem, ipsum dolor.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti officia odi ratione dignissimos corporis eaque nemo repudiandae magni? Animi adipisci sint dignissimos aut accusamus dolorem maxime quam veritatis consequuntur?',
    },
    {
      title: 'Lorem, ipsum dolor.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti officia odi ratione dignissimos corporis eaque nemo repudiandae magni? Animi adipisci sint dignissimos aut accusamus dolorem maxime quam veritatis consequuntur?',
    },
    {
      title: 'Lorem, ipsum dolor.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti officia odi ratione dignissimos corporis eaque nemo repudiandae magni? Animi adipisci sint dignissimos aut accusamus dolorem maxime quam veritatis consequuntur?',
    },
    {
      title: 'Lorem, ipsum dolor.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti officia odi ratione dignissimos corporis eaque nemo repudiandae magni? Animi adipisci sint dignissimos aut accusamus dolorem maxime quam veritatis consequuntur?',
    },
    {
      title: 'Lorem, ipsum dolor.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti officia odi ratione dignissimos corporis eaque nemo repudiandae magni? Animi adipisci sint dignissimos aut accusamus dolorem maxime quam veritatis consequuntur?',
    },
    {
      title: 'Lorem, ipsum dolor.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti officia odi ratione dignissimos corporis eaque nemo repudiandae magni? Animi adipisci sint dignissimos aut accusamus dolorem maxime quam veritatis consequuntur?',
    },
    {
      title: 'Lorem, ipsum dolor.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti officia odi ratione dignissimos corporis eaque nemo repudiandae magni? Animi adipisci sint dignissimos aut accusamus dolorem maxime quam veritatis consequuntur?',
    },
    {
      title: 'Lorem, ipsum dolor.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti officia odi ratione dignissimos corporis eaque nemo repudiandae magni? Animi adipisci sint dignissimos aut accusamus dolorem maxime quam veritatis consequuntur?',
    },
  ];

  testTitle = '';

  handleClick(value: string) {
    this.cardTitle = value;
  }

  handleText(value: string) {
    this.articleText = value;
  }

  handleTestValue(value: string) {
    this.testTitle = value;
  }
}
