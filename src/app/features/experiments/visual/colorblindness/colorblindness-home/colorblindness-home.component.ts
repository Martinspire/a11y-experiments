import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from '@shared/components/card/card.component';

@Component({
  selector: 'ae-colorblindness-home',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './colorblindness-home.component.html',
  styleUrl: './colorblindness-home.component.scss',
})
export class ColorblindnessHomeComponent {

}
