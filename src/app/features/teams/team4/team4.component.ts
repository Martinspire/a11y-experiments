import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '@shared/components/card/card.component';

@Component({
  selector: 'ae-team4',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './team4.component.html',
  styleUrl: './team4.component.scss',
})
export class Team4Component {

}
