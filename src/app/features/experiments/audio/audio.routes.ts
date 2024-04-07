import { Route } from '@angular/router';
import { AudioComponent } from './audio.component';
import { ScreenreaderComponent } from './screenreader/screenreader.component';
import { SubtitlesComponent } from './subtitles/subtitles.component';

export const audioRoutes: Route[] = [
  {
    path: '',
    component: AudioComponent,
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
