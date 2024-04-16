import { Component } from '@angular/core';
import {
  FormsModule, ReactiveFormsModule,
} from '@angular/forms';
import { EmbedPdfComponent } from '@shared/components/embed-pdf/embed-pdf.component';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'ae-posters',
  standalone: true,
  imports: [
    DropdownModule,
    EmbedPdfComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './posters.component.html',
  styleUrl: './posters.component.scss',
})
export class PostersComponent {
  repoUrl = 'github/UKHomeOffice/posters/blob/master/accessibility/dos-donts/';
  posterLanguages = [
    {
      label: 'English',
      id: 'en',
      values: ['posters_en-UK/accessibility-posters-set.pdf'],
    },
    {
      label: 'Czech',
      id: 'cz',
      values: ['posters_cz/accessibilty-posters-set_cz.pdf'],
    },
    {
      label: 'Dutch',
      id: 'nl',
      values: [
        'posters_nl/autistic-spectrum_nl.pdf',
        'posters_nl/deaf_nl.pdf',
        'posters_nl/dyslexia_nl.pdf',
        'posters_nl/low-vision_nl.pdf',
        'posters_nl/motor-disabilities_nl.pdf',
        'posters_nl/screenreader_nl.pdf',
      ],
    },
    {
      label: 'Español',
      id: 'es',
      values: [
        'posters_es/autistic-spectrum_es.pdf',
        'posters_es/deaf_es.pdf',
        'posters_es/dyslexia_es.pdf',
        'posters_es/low-vision_es.pdf',
        'posters_es/motor-disabilities_es.pdf',
        'posters_es/screenreader_es.pdf',
      ],
    },
    {
      label: 'Français',
      id: 'fr',
      values: [
        'posters_fr/autistic-spectrum_fr.pdf',
        'posters_fr/deaf_fr.pdf',
        'posters_fr/dyslexia_fr.pdf',
        'posters_fr/low-vision_fr.pdf',
        'posters_fr/motor-disabilities_fr.pdf',
        'posters_fr/screenreader_fr.pdf',
      ],
    },
    {
      label: 'German',
      id: 'de',
      values: ['posters_de/accessibilty-posters-set-de.pdf'],
    },
    {
      label: 'Italian',
      id: 'it',
      values: ['posters_it/accessibility-posters-set_it.pdf'],
    },

  ];

  selectedLanguage = this.posterLanguages[0];
}
