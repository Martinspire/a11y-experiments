import { Component } from '@angular/core';
import { CardComponent } from '@shared/components/card/card.component';
import { EmbedPdfComponent } from '@shared/components/embed-pdf/embed-pdf.component';

@Component({
  selector: 'ae-wcag',
  imports: [CardComponent, EmbedPdfComponent],
  templateUrl: './wcag.component.html',
  styleUrl: './wcag.component.scss',
})
export class WcagComponent {

}
