import {
  Component, OnInit,
} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SlideMenuModule } from 'primeng/slidemenu';

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
    SlideMenuModule,
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
            icon: 'pi pi-fw pi-brain',
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
      },
    ];
  }

  switchThemeLightDark() {
    console.log('switch light/dark');
  }

  decreaseFontSize() {
    console.log('decrease font size');
  }

  increaseFontSize() {
    console.log('increase font size');
  }
}
