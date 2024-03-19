import {
  CommonModule, NgOptimizedImage,
} from '@angular/common';
import {
  Component, OnInit,
} from '@angular/core';
import { CardComponent } from '@shared/components/card/card.component';
import { ColorblindPhotos } from '@shared/constants/colorblind.constants';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'ae-colorblindness',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule,
    GalleriaModule,
    NgOptimizedImage,
  ],
  templateUrl: './colorblindness.component.html',
  styleUrl: './colorblindness.component.scss',
})
export class ColorblindnessComponent implements OnInit {
  images: any[] | undefined;

  responsiveOptions: any[] | undefined;

  ngOnInit() {

    this.images = ColorblindPhotos;
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
      },
    ];
  }
}
