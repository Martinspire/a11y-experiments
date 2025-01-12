import { CommonModule } from '@angular/common';
import {
  Component,
  input,
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
  readonly config = input<CardConfigInterface>();
}
