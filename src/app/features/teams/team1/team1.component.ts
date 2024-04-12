import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '@shared/components/card/card.component';

@Component({
  selector: 'ae-team1',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './team1.component.html',
  styleUrl: './team1.component.scss',
})
export class Team1Component {

}
