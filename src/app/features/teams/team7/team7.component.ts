import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '@shared/components/card/card.component';

@Component({
  selector: 'ae-team7',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './team7.component.html',
  styleUrl: './team7.component.scss',
})
export class Team7Component {

}
