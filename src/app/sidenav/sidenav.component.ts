import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  private breakpointObserver = inject(BreakpointObserver);
  isAdmin = false;
  cardTitle = '';
  articleText = '';

  routes = [
    {
      id: 0,
      direct: '',
      text: 'Home',
    },
    {
      id: 1,
      direct: 'add',
      text: 'Add',
    },
    {
      id: 2,
      direct: 'cart',
      text: 'Cart',
    },
  ];
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

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}
