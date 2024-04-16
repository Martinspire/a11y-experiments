import { CommonModule } from '@angular/common';
import {
  Component, Input,
} from '@angular/core';
import { SafeUrlPipe } from '@shared/pipes/safe-url.pipe';

@Component({
  selector: 'ae-embed-pdf',
  standalone: true,
  imports: [SafeUrlPipe, CommonModule],
  templateUrl: './embed-pdf.component.html',
  styleUrl: './embed-pdf.component.scss',
})
export class EmbedPdfComponent {
  @Input({ required: true }) url!: string; // Pdf ID (the thing behind the v= in the URL)
  @Input() width = '100%'; // Width of the pdf
  @Input() height = '1200px'; // Height of the pdf
  @Input() title = ''; // Title of the pdf
  @Input() useProxy = false; // Whether to use the Jupyter proxy or not
}
