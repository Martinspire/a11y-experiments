import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '@shared/components/card/card.component';

/**
 * Use this component to add content from team 1 to the project and show your contribution.
 * Use the `imports` array to add the components you need to use in this component.
 * Since this is a standalone module, you need to figure out what you need.
 * If you are lazy you can use the `SharedModule` and get everything in one go and we'll figure
 * out later what is actually needed (for performance reasons)
 *
 * If you need help working with Angular or whatever,
 * check the main README.md in the repository for links.
 */
@Component({
  selector: 'ae-team8',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './team8.component.html',
  styleUrl: './team8.component.scss',
})
export class Team8Component {

}
