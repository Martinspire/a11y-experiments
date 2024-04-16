import {
  Component, OnInit,
} from '@angular/core';
import { Experiments } from '@shared/constants/experiments.constants';
import {
  MainMenuItems, SideMenuItems,
} from '@shared/constants/header.constants';
import {
  MenuItem, TreeNode,
} from 'primeng/api';
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
  mainItems: MenuItem[] = MainMenuItems;
  sideItems: MenuItem[] = [];
  lightIcon = 'pi pi-fw pi-moon';
  darkIcon = 'pi pi-fw pi-sun';
  currentLightDarkIcon = this.lightIcon;
  isLight = true;

  ngOnInit() {
    this.mainItems[2].items = this._mapExperiments(Experiments);

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
      ...SideMenuItems,
    ];
  }

  private _mapExperiments(experiments: TreeNode[]): MenuItem[] {
    const items: MenuItem[] = [];
    experiments.forEach((experiment: TreeNode) => {
      const item: MenuItem = {
        label: experiment.label,
        icon: experiment.icon,
        routerLink: [experiment.data],
        disabled: experiment.selectable === false,
      };

      if (experiment.children) {
        item.items = this._mapExperiments(experiment.children);
      }

      items.push(item);
    });
    return items;
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
