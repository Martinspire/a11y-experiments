import { Route } from '@angular/router';
import { AudioComponent } from './audio.component';
import { HearingLossComponent } from './hearing-loss/hearing-loss.component';
import { ScreenreaderComponent } from './screenreader/screenreader.component';
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
    path: 'screenreader',
    component: ScreenreaderComponent,
    data: {
      title: 'Screenreader',
      breadcrumb: 'Screenreader',
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
