import { CommonModule } from '@angular/common';
import {
  Component, OnInit, input,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Experiments } from '@shared/constants/experiments.constants';
import { TreeNode } from 'primeng/api';
import { ExperimentsListItemsComponent } from './experiments-list-items/experiments-list-items.component';

@Component({
  selector: 'ae-experiments-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ExperimentsListItemsComponent,
  ],
  templateUrl: './experiments-list.component.html',
  styleUrl: './experiments-list.component.scss',
})
export class ExperimentsListComponent implements OnInit {
  experiments: TreeNode[] = [];
  allExperiments: TreeNode[] = Experiments;
  readonly selectedKey = input.required<string>();

  ngOnInit(): void {
    this.experiments = this.getExperiments(this.allExperiments);
  }

  getExperiments(experiments: TreeNode[]): TreeNode[] | [] {
    for (const experiment of experiments) {
      if (experiment.key === this.selectedKey() && experiment.children) {
        return experiment.children;
      } else if (experiment.children) {
        const children = this.getExperiments(experiment.children);
        if (children.length > 0) {
          return children;
        }
      }
    }
    return [];
  }
}
