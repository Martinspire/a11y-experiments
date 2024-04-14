import {
  Component, OnInit,
} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';

/**
 * Todo: menu toevoegen
 * Todo: mobile support
 * Todo: switch light/dark
 */
@Component({
  selector: 'ae-header',
  standalone: true,
  imports: [
    MenubarModule,
    MenuModule,
    ButtonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  mainItems: MenuItem[] = [];
  sideItems: MenuItem[] = [];
  lightIcon = 'pi pi-fw pi-moon';
  darkIcon = 'pi pi-fw pi-sun';
  currentLightDarkIcon = this.lightIcon;
  isLight = true;

  ngOnInit() {
    this.mainItems = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/'],
      },
      {
        label: 'Experiments',
        icon: 'pi pi-fw pi-pencil',
        routerLink: ['/experiments'],
        items: [
          {
            label: 'Visual',
            icon: 'pi pi-fw pi-image',
            routerLink: ['/experiments/visual'],
          },
          {
            label: 'Motion',
            icon: 'pi pi-fw pi-arrows-alt',
            routerLink: ['/experiments/motion'],
          },
          {
            label: 'Mind',
            icon: 'pi pi-fw pi-user',
            routerLink: ['/experiments/mind'],
          },
          {
            label: 'Audio',
            icon: 'pi pi-fw pi-volume-up',
            routerLink: ['/experiments/audio'],
          },
        ],
      },
      {
        label: 'Changelog',
        icon: 'pi pi-fw pi-list',
        routerLink: ['/changelog'],
      },
      {
        label: 'Examples',
        icon: 'pi pi-fw pi-bolt',
        routerLink: ['/examples'],
        items: [
          {
            label: 'Embed',
            icon: 'pi pi-fw pi-external-link',
            routerLink: ['/examples/embed'],
          },
          {
            label: 'Graph',
            icon: 'pi pi-fw pi-chart-bar',
            routerLink: ['/examples/graph'],
          },
          {
            label: 'Markdown',
            icon: 'pi pi-fw pi-book',
            routerLink: ['/examples/markdown'],
          },
        ],
      },
      {
        label: 'Teams',
        icon: 'pi pi-fw pi-users',
        routerLink: ['/teams'],
        items: [
          {
            label: 'Team 1',
            icon: 'pi pi-fw pi-users',
            routerLink: ['/teams/team1'],
          },
          {
            label: 'Team 2',
            icon: 'pi pi-fw pi-users',
            routerLink: ['/teams/team2'],
          },
          {
            label: 'Team 3',
            icon: 'pi pi-fw pi-users',
            routerLink: ['/teams/team3'],
          },
          {
            label: 'Team 4',
            icon: 'pi pi-fw pi-users',
            routerLink: ['/teams/team4'],
          },
          {
            label: 'Team 5',
            icon: 'pi pi-fw pi-users',
            routerLink: ['/teams/team5'],
          },
          {
            label: 'Team 6',
            icon: 'pi pi-fw pi-users',
            routerLink: ['/teams/team6'],
          },
          {
            label: 'Team 7',
            icon: 'pi pi-fw pi-users',
            routerLink: ['/teams/team7'],
          },
          {
            label: 'Team 8',
            icon: 'pi pi-fw pi-users',
            routerLink: ['/teams/team8'],
          },
          {
            label: 'Team 9',
            icon: 'pi pi-fw pi-users',
            routerLink: ['/teams/team9'],
          },
        ],
      },
    ];

    this.sideItems = [
      {
        label: 'Switch light/dark',
        icon: this.currentLightDarkIcon,
        command: () => {
          this.switchThemeLightDark();
        },
        disabled: true,
      },
      {
        label: 'Decrease font size',
        icon: 'pi pi-fw pi-minus',
        command: () => {
          this.decreaseFontSize();
        },
        disabled: true,
      },
      {
        label: 'Increase font size',
        icon: 'pi pi-fw pi-plus',
        command: () => {
          this.increaseFontSize();
        },
        disabled: true,
      },
      {
        label: 'Github',
        icon: 'pi pi-fw pi-github',
        url: 'https://github.com/martinspire/a11y-experiments',
        target: '_blank',
      },
    ];
  }

  switchThemeLightDark() {
    // console.log('switch light/dark');
  }

  decreaseFontSize() {
    // console.log('decrease font size');
  }

  increaseFontSize() {
    // console.log('increase font size');
  }
}
