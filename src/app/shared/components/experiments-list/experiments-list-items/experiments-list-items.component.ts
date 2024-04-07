import {
  Component, Input,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'ae-experiments-list-items',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './experiments-list-items.component.html',
  styleUrl: './experiments-list-items.component.scss',
})
export class ExperimentsListItemsComponent {
  @Input() list: TreeNode[] = [];
}
