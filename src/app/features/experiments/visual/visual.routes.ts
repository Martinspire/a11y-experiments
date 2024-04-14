import { Route } from '@angular/router';
import { ColorblindnessFormComponent } from './colorblindness/colorblindness-form/colorblindness-form.component';
import { ColorblindnessHomeComponent } from './colorblindness/colorblindness-home/colorblindness-home.component';
import { ColorblindnessImagesComponent } from './colorblindness/colorblindness-images/colorblindness-images.component';
import { ColorblindnessRealWorldExamplesComponent } from './colorblindness/colorblindness-real-world-examples/colorblindness-real-world-examples.component';
import { ColorblindnessComponent } from './colorblindness/colorblindness.component';
import { DyslexiaComponent } from './dyslexia/dyslexia.component';
import { GlaucomaComponent } from './glaucoma/glaucoma.component';
import { ImpairmentComponent } from './impairment/impairment.component';
import { VisualComponent } from './visual.component';

export const visualRoutes: Route[] = [
  {
    path: '',
    component: VisualComponent,
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
];
