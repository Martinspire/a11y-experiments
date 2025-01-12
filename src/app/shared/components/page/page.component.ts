import { CommonModule } from '@angular/common';
import {
  Component, OnInit, inject,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  ActivatedRoute, NavigationEnd, Router,
} from '@angular/router';
import {
  filter, map,
} from 'rxjs';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'ae-page',
  standalone: true,
  imports: [BreadcrumbsComponent, CommonModule],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
})
export class PageComponent implements OnInit {
  private router = inject(Router);
  private titleService = inject(Title);

  title = '';

  ngOnInit() {
    this.router.events
      .pipe(
        filter(routerEvent => routerEvent instanceof NavigationEnd),
        map(() => {
          let route: ActivatedRoute = this.router.routerState.root;
          let routeTitle = '';
          while (route?.firstChild) {
            route = route.firstChild;
          }
          if (route?.snapshot?.data['title']) {
            routeTitle = route.snapshot.data['title'];
          }
          return routeTitle;
        }),
      )
      .subscribe((title: string) => {
        this.title = title ?? '';
        this.titleService.setTitle(this.title ? `${this.title} - A11y Experiments` : 'A11y Experiments');
      });
  }
}
