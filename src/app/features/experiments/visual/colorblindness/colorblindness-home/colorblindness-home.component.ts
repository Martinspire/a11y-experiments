
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from '@shared/components/card/card.component';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'ae-colorblindness-home',
  imports: [
    CardComponent,
    RouterModule,
    AccordionModule,
  ],
  templateUrl: './colorblindness-home.component.html',
  styleUrl: './colorblindness-home.component.scss',
})
export class ColorblindnessHomeComponent {

}
