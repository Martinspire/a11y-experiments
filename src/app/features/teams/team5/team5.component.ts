import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '@shared/components/card/card.component';

@Component({
  selector: 'ae-team5',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './team5.component.html',
  styleUrl: './team5.component.scss',
})
export class Team5Component {

}
