import { Component } from '@angular/core';
import { CardComponent } from '@shared/components/card/card.component';

@Component({
  selector: 'ae-embed',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './embed.component.html',
  styleUrl: './embed.component.scss',
})
export class EmbedComponent {

}
