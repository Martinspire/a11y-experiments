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
