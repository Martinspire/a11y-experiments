import { CommonModule } from '@angular/common';
import {
  Component, Input,
} from '@angular/core';
import { CardConfigInterface } from '@interfaces/card.interface';

/**
 * Todo: add support for expandable and collapsable
 */
@Component({
  selector: 'ae-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() config!: CardConfigInterface;
}
