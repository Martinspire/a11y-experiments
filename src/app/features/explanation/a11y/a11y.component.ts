import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from '@shared/components/card/card.component';

@Component({
  selector: 'ae-a11y',
  imports: [CardComponent, RouterModule],
  templateUrl: './a11y.component.html',
  styleUrl: './a11y.component.scss',
})
export class A11yComponent {

}
