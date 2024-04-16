import { Component } from '@angular/core';
import { CardComponent } from '@shared/components/card/card.component';
import { EmbedYoutubeComponent } from '@shared/components/embed-youtube/embed-youtube.component';

@Component({
  selector: 'ae-subtitles',
  standalone: true,
  imports: [CardComponent, EmbedYoutubeComponent],
  templateUrl: './subtitles.component.html',
  styleUrl: './subtitles.component.scss',
})
export class SubtitlesComponent {

}
