import { Component } from '@angular/core';
import { CardComponent } from '@shared/components/card/card.component';

@Component({
  selector: 'ae-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  githubUrl = 'https://github.com/martinspire/a11y-experiments';
}
