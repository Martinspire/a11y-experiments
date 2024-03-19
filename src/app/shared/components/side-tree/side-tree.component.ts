import {
  Component, OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  Event,
  NavigationEnd, Router,
} from '@angular/router';
import { Experiments } from '@shared/constants/experiments.constants';
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
  standalone: true,
  imports: [TreeModule],
  templateUrl: './side-tree.component.html',
  styleUrl: './side-tree.component.scss',
})
export class SideTreeComponent implements OnInit {
  experiments: TreeNode[] = Experiments;
  selectedExperiment!: TreeNode;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}


  ngOnInit() {
    this.router.events.pipe(
  	  filter((routerEvent: Event) => routerEvent instanceof NavigationEnd),
      distinctUntilChanged(),
    ).subscribe((routerEvent) => {
      const url = (routerEvent as NavigationEnd).url;
      const selectedNode = this.findNodeByUrl(this.experiments, url);
      if (selectedNode) {
        this.selectedExperiment = selectedNode;
      }
    });
  }

  findNodeByUrl(nodes: TreeNode[], url: string): TreeNode | undefined {
    for (const node of nodes) {
      if (node.data === url) {
        return node;
      }
      if (node.children) {
        const found = this.findNodeByUrl(node.children, url);
        if (found) {
          return found;
        }
      }
    }
    return undefined;
  }

  selectExperiment(event: any) {
    if (event.node.data) {
      this.router.navigateByUrl(event.node.data);
    }
  }
}
