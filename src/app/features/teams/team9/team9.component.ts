import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '@shared/components/card/card.component';

@Component({
  selector: 'ae-team9',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './team9.component.html',
  styleUrl: './team9.component.scss',
})
export class Team9Component {

}
