import { Component } from '@angular/core';
import { CardComponent } from '@shared/components/card/card.component';
import { NotFoundCardConfig } from '@shared/constants/cards.constants';

@Component({
  selector: 'ae-not-found',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  NotFoundCardConfig = NotFoundCardConfig;
}
