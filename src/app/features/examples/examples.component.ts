import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from '@shared/components/card/card.component';

@Component({
  selector: 'ae-examples',
  standalone: true,
  imports: [CardComponent, RouterModule],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.scss',
})
export class ExamplesComponent {

}
