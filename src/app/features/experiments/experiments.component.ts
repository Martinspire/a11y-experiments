import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from '@shared/components/card/card.component';
import { SideTreeComponent } from '@shared/components/side-tree/side-tree.component';
import { EmptyCardConfig } from '@shared/constants/cards.constants';

@Component({
  selector: 'ae-experiments',
  standalone: true,
  imports: [
    CardComponent,
    SideTreeComponent,
    RouterModule,
  ],
  templateUrl: './experiments.component.html',
  styleUrl: './experiments.component.scss',
})
export class ExperimentsComponent {
  EmptyCardConfig = EmptyCardConfig;
}
