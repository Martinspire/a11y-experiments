import { MenuItem } from 'primeng/api';

export const MainMenuItems: MenuItem[] = [
  {
    label: 'Home',
    icon: 'pi pi-fw pi-home',
    routerLink: ['/'],
    routerLinkActiveOptions: { exact: true },
    styleClass: 'main',
  },
  {
    label: 'Explanation',
    icon: 'pi pi-fw pi-question-circle',
    routerLink: ['/explanation'],
    items: [
      {
        label: 'Aria',
        icon: 'pi pi-fw pi-bullseye',
        routerLink: ['/explanation/aria'],
      },
      {
        label: 'Posters',
        icon: 'pi pi-fw pi-image',
        routerLink: ['/explanation/posters'],
      },
      {
        label: 'WCAG',
        icon: 'pi pi-fw pi-list-check',
        routerLink: ['/explanation/wcag'],
      },
    ],
  },
  {
    label: 'Experiments',
    icon: 'pi pi-fw pi-pencil',
    routerLink: ['/experiments'],
    items: [],
    styleClass: 'main',
  },
  {
    label: 'Code Examples',
    icon: 'pi pi-fw pi-bolt',
    routerLink: ['/examples'],
    styleClass: 'main',
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
    styleClass: 'main',
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

export const SideMenuItems: MenuItem[] = [
  {
    label: 'Changelog',
    icon: 'pi pi-fw pi-list',
    routerLink: ['/changelog'],
  },
  {
    label: 'Github',
    icon: 'pi pi-fw pi-github',
    url: 'https://github.com/martinspire/a11y-experiments',
    target: '_blank',
  },
];
