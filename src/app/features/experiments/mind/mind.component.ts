import { Component } from '@angular/core';
import { CardComponent } from '@shared/components/card/card.component';
import { ExperimentsListComponent } from '@shared/components/experiments-list/experiments-list.component';

@Component({
  selector: 'ae-mind',
  imports: [CardComponent, ExperimentsListComponent],
  templateUrl: './mind.component.html',
  styleUrl: './mind.component.scss',
})
export class MindComponent {

}
