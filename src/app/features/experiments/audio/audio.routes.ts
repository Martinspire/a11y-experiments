import { Route } from '@angular/router';
import { AudioComponent } from './audio.component';
import { HearingLossComponent } from './hearing-loss/hearing-loss.component';
import { SubtitlesComponent } from './subtitles/subtitles.component';

export const audioRoutes: Route[] = [
  {
    path: '',
    component: AudioComponent,
  },
  {
    path: 'hearing-loss',
    component: HearingLossComponent,
    data: {
      title: 'Hearing Loss',
      breadcrumb: 'Hearing Loss',
    },
  },
  {
    path: 'subtitles',
    component: SubtitlesComponent,
    data: {
      title: 'Subtitles',
      breadcrumb: 'Subtitles',
    },
  },
];
