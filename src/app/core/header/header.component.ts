import {
  Component, OnInit, inject,
} from '@angular/core';
import { Experiments } from '@shared/constants/experiments.constants';
import { MainMenuItems, SideMenuItems } from '@shared/constants/header.constants';
import {
  DarkTheme,
  LightTheme,
} from '@shared/constants/theme.constants';
import { ThemeService } from '@shared/services/theme.service';
import { MenuItem, TreeNode } from 'primeng/api';
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
  imports: [
    MenubarModule,
    MenuModule,
    ButtonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  private themeService = inject(ThemeService);

  mainItems: MenuItem[] = MainMenuItems;
  sideItems: MenuItem[] = [];
  lightIcon = 'pi pi-fw pi-sun';
  darkIcon = 'pi pi-fw pi-moon';
  currentLightDarkIcon = this.lightIcon;
  isLight = false;

  ngOnInit() {
    this.mainItems[2].items = this._mapExperiments(Experiments);

    this.sideItems = [
      {
        label: 'Switch light/dark',
        icon: this.currentLightDarkIcon,
        command: () => {
          this.switchThemeLightDark();
        },
      },
      {
        label: 'Decrease font size',
        icon: 'pi pi-fw pi-minus',
        command: () => {
          this.decreaseFontSize();
        },
      },
      {
        label: 'Increase font size',
        icon: 'pi pi-fw pi-plus',
        command: () => {
          this.increaseFontSize();
        },
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
        routerLink: [experiment.data.url],
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
    this.isLight = !this.isLight;
    this.currentLightDarkIcon = this.isLight ? this.lightIcon : this.darkIcon;
    this.themeService.switchTheme(this.isLight ? LightTheme : DarkTheme);
  }

  decreaseFontSize() {
    this.themeService.decreaseFontSize();
  }

  increaseFontSize() {
    this.themeService.increaseFontSize();
  }
}
