import { Component } from '@angular/core';
import { CardComponent } from '@shared/components/card/card.component';
import { ExperimentsListComponent } from '@shared/components/experiments-list/experiments-list.component';

@Component({
  selector: 'ae-visual',
  standalone: true,
  imports: [CardComponent, ExperimentsListComponent],
  templateUrl: './visual.component.html',
  styleUrl: './visual.component.scss',
})
export class VisualComponent {

}
