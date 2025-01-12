import { CommonModule } from '@angular/common';
import {
  Component,
  input,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'ae-experiments-list-items',
  imports: [CommonModule, RouterModule],
  templateUrl: './experiments-list-items.component.html',
  styleUrl: './experiments-list-items.component.scss',
})
export class ExperimentsListItemsComponent {
  readonly list = input<TreeNode[]>([]);
}
