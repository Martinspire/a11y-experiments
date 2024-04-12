import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '@shared/components/card/card.component';

@Component({
  selector: 'ae-team2',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './team2.component.html',
  styleUrl: './team2.component.scss',
})
export class Team2Component {

}
