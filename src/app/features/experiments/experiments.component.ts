import { Component } from '@angular/core';
import { CardComponent } from '@shared/components/card/card.component';
import { ExperimentsCardConfig } from '@shared/constants/cards.constants';

@Component({
  selector: 'ae-experiments',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './experiments.component.html',
  styleUrl: './experiments.component.scss',
})
export class ExperimentsComponent {
  ExperimentsCardConfig = ExperimentsCardConfig;
}
