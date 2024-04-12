import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '@shared/components/card/card.component';

@Component({
  selector: 'ae-team3',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './team3.component.html',
  styleUrl: './team3.component.scss',
})
export class Team3Component {

}
