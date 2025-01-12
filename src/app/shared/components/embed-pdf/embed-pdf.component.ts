import { CommonModule } from '@angular/common';
import {
  Component,
  input,
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
  readonly url = input.required<string>(); // Pdf ID (the thing behind the v= in the URL)
  readonly width = input('100%'); // Width of the pdf
  readonly height = input('1200px'); // Height of the pdf
  readonly title = input(''); // Title of the pdf
  readonly useProxy = input(false); // Whether to use the Jupyter proxy or not
}
