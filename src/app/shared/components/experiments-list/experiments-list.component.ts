import { CommonModule } from '@angular/common';
import {
  Component, Input, OnInit,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Experiments } from '@shared/constants/experiments.constants';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'ae-experiments-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './experiments-list.component.html',
  styleUrl: './experiments-list.component.scss',
})
export class ExperimentsListComponent implements OnInit {
  experiments: TreeNode[] = [];
  allExperiments: TreeNode[] = Experiments;
  @Input() selectedKey!: string;

  ngOnInit(): void {
    this.experiments = this.getExperiments(this.allExperiments);
  }

  getExperiments(experiments: TreeNode[]): TreeNode[] | [] {
    for (const experiment of experiments) {
      if (experiment.key === this.selectedKey && experiment.children) {
        return experiment.children;
      } else if (experiment.children) {
        return this.getExperiments(experiment.children);
      }
    }
    return [];
  }
}
