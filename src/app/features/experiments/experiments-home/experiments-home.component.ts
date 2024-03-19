import { Component } from '@angular/core';
import { CardComponent } from '@shared/components/card/card.component';
import { ExperimentsCardConfig } from '@shared/constants/cards.constants';

@Component({
  selector: 'ae-experiments-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './experiments-home.component.html',
  styleUrl: './experiments-home.component.scss',
})
export class ExperimentsHomeComponent {
  ExperimentsCardConfig = ExperimentsCardConfig;
}
