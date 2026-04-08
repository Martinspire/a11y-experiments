
import {
  Component, inject, DOCUMENT,
} from '@angular/core';
import {
  NavigationEnd, Router, RouterLink,
} from '@angular/router';
import { Experiments } from '@shared/constants/experiments.constants';
import { GithubPath } from '@shared/constants/generic.constants';
import { TreeNode } from 'primeng/api';
import { TreeModule } from 'primeng/tree';
import {
  distinctUntilChanged,
  filter,
} from 'rxjs';

/**
 * TODO: navigation should set the active node
 */
@Component({
  selector: 'ae-side-tree',
  imports: [TreeModule, RouterLink],
  templateUrl: './side-tree.component.html',
  styleUrl: './side-tree.component.scss',
})
export class SideTreeComponent {
  private router = inject(Router);
  private doc = inject<Document>(DOCUMENT);

  experiments: TreeNode[] = Experiments;
  selectedExperiment!: TreeNode;

  constructor() {
    this.router.events.pipe(
      filter(routerEvent => routerEvent instanceof NavigationEnd),
      distinctUntilChanged(),
    ).subscribe((routerEvent) => {
      const url = (routerEvent as NavigationEnd).url;
      this._selectNode(url);
    });
    const path = this.doc.defaultView?.location.pathname?.replaceAll(GithubPath, '');
    if (path) {
      this._selectNode(path);
    }
  }

  private _selectNode(url: string) {
    const selectedNode = this._findNodeByUrl(this.experiments, url);
    if (selectedNode) {
      this.selectedExperiment = selectedNode;
    }
  }

  private _findNodeByUrl(nodes: TreeNode[], url: string): TreeNode | undefined {
    for (const node of nodes) {
      if (node.data.url === url) {
        return node;
      }
      if (node.children) {
        const found = this._findNodeByUrl(node.children, url);
        if (found) {
          return found;
        }
      }
    }
    return undefined;
  }

  selectExperiment($event: any) {
    if ($event.node.data) {
      $event.node.styleClass = 'active';
      this.router.navigateByUrl($event.node.data.url);
    }
  }

  deSelectExperiment($event: any) {
    if ($event.node.styleClass) {
      $event.node.styleClass = '';
    }
  }
}
