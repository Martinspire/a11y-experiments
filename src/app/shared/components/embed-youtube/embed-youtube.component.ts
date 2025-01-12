import {
  Component,
  input,
} from '@angular/core';
import { SafeUrlPipe } from '@shared/pipes/safe-url.pipe';

@Component({
  selector: 'ae-embed-youtube',
  imports: [SafeUrlPipe],
  templateUrl: './embed-youtube.component.html',
  styleUrl: './embed-youtube.component.scss',
})
export class EmbedYoutubeComponent {
  private readonly defaultWidth = 560;
  private readonly defaultHeight = 315;
  readonly videoId = input.required<string>(); // Youtube ID (the thing behind the v= in the URL)
  readonly width = input(this.defaultWidth); // Width of the video
  readonly height = input(this.defaultHeight); // Height of the video
  readonly title = input(''); // Title of the video
}
