import {
  Component, Input,
} from '@angular/core';
import { SafeUrlPipe } from '@shared/pipes/safe-url.pipe';

@Component({
  selector: 'ae-embed-youtube',
  standalone: true,
  imports: [SafeUrlPipe],
  templateUrl: './embed-youtube.component.html',
  styleUrl: './embed-youtube.component.scss',
})
export class EmbedYoutubeComponent {
  @Input() videoId!: string; // Youtube ID (the thing behind the v= in the URL)
  @Input() width = 560; // Width of the video
  @Input() height = 315; // Height of the video
  @Input() title = ''; // Title of the video
}
