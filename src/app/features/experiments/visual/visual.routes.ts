import { Route } from '@angular/router';
import { BlurryVisionComponent } from './blurry-vision/blurry-vision.component';
import { ColorblindnessFormComponent } from './colorblindness/colorblindness-form/colorblindness-form.component';
import { ColorblindnessHomeComponent } from './colorblindness/colorblindness-home/colorblindness-home.component';
import { ColorblindnessImagesComponent } from './colorblindness/colorblindness-images/colorblindness-images.component';
import { ColorblindnessRealWorldExamplesComponent } from './colorblindness/colorblindness-real-world-examples/colorblindness-real-world-examples.component';
import { ColorblindnessComponent } from './colorblindness/colorblindness.component';
import { ContrastComponent } from './contrast/contrast.component';
import { DyslexiaComponent } from './dyslexia/dyslexia.component';
import { GlaucomaComponent } from './glaucoma/glaucoma.component';
import { ImpairmentComponent } from './impairment/impairment.component';
import { ScreenreaderComponent } from './screenreader/screenreader.component';
import { TooSmallComponent } from './too-small/too-small.component';
import { VisualComponent } from './visual.component';

export const visualRoutes: Route[] = [
  {
    path: '',
    component: VisualComponent,
  },
  {
    path: 'blurry-vision',
    component: BlurryVisionComponent,
    data: {
      title: 'Blurry Vision',
      breadcrumb: 'Blurry Vision',
    },
  },
  {
    path: 'colorblindness',
    component: ColorblindnessComponent,
    data: {
      title: 'Colorblindness',
      breadcrumb: 'Colorblindness',
    },
    children: [
      {
        path: '',
        component: ColorblindnessHomeComponent,
        data: {
          title: 'Info',
          breadcrumb: 'Info',
        },
      },
      {
        path: 'form',
        component: ColorblindnessFormComponent,
        data: {
          title: 'Form',
          breadcrumb: 'Form',
        },
      },
      {
        path: 'images',
        component: ColorblindnessImagesComponent,
        data: {
          title: 'Images',
          breadcrumb: 'Images',
        },
      },
      {
        path: 'real-world',
        component: ColorblindnessRealWorldExamplesComponent,
        data: {
          title: 'Real World',
          breadcrumb: 'Real World',
        },
      },
    ],
  },
  {
    path: 'contrast',
    component: ContrastComponent,
    data: {
      title: 'Contrast',
      breadcrumb: 'Contrast',
    },
  },
  {
    path: 'dyslexia',
    component: DyslexiaComponent,
    data: {
      title: 'Dyslexia',
      breadcrumb: 'Dyslexia',
    },
  },
  {
    path: 'glaucoma',
    component: GlaucomaComponent,
    data: {
      title: 'Glaucoma',
      breadcrumb: 'Glaucoma',
    },
  },
  {
    path: 'impairment',
    component: ImpairmentComponent,
    data: {
      title: 'Impairment',
      breadcrumb: 'Impairment',
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
    path: 'too-small',
    component: TooSmallComponent,
    data: {
      title: 'Too Small',
      breadcrumb: 'Too Small',
    },
  },
];
