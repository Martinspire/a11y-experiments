import { Component } from '@angular/core';
import { CardComponent } from '@shared/components/card/card.component';
import { ExperimentsListComponent } from '@shared/components/experiments-list/experiments-list.component';

@Component({
  selector: 'ae-motion',
  standalone: true,
  imports: [CardComponent, ExperimentsListComponent],
  templateUrl: './motion.component.html',
  styleUrl: './motion.component.scss',
})
export class MotionComponent {

}
