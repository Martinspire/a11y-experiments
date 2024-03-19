import { Component } from '@angular/core';
import { CardComponent } from '@shared/components/card/card.component';
import { ExperimentsListComponent } from '@shared/components/experiments-list/experiments-list.component';

@Component({
  selector: 'ae-audio',
  standalone: true,
  imports: [CardComponent, ExperimentsListComponent],
  templateUrl: './audio.component.html',
  styleUrl: './audio.component.scss',
})
export class AudioComponent {

}
