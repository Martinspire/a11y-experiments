import { CommonModule } from '@angular/common';
import {
  Component, OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule, ReactiveFormsModule,
} from '@angular/forms';
import { IWikiRestQuery } from '@interfaces/wiki.interface';
import { CardComponent } from '@shared/components/card/card.component';
import { WikiService } from '@shared/services/wikipedia.service';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';

@Component({
  selector: 'ae-dyslexia',
  standalone: true,
  imports: [
    SliderModule,
    CommonModule,
    CardComponent,
    AccordionModule,
    ButtonModule,
    DropdownModule,
    InputSwitchModule,
    SelectButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './dyslexia.component.html',
  styleUrl: './dyslexia.component.scss',
})
export class DyslexiaComponent implements OnInit {
  articles!: IWikiRestQuery[];
  experimentConfig!: FormGroup;

  fontFamilyOptions = [
    {
      label: 'Arial',
      value: 'Arial',
    },
    {
      label: 'Comic Sans MS',
      value: 'Comic Sans MS',
    },
    {
      label: 'Lucida Console',
      value: 'Lucida Console',
    },
    {
      label: 'OpenDyslexic',
      value: 'OpenDyslexic3',
    },
  ];

  defaultFontFamily = this.fontFamilyOptions[0].value;

  /* eslint-disable @typescript-eslint/no-magic-numbers */
  fontSizeOptions = [
    8,
    10,
    12,
    14,
    16,
    18,
    20,
    22,
    24,
    26,
    28,
    30,
    32,
    34,
    36,
    38,
    40,
  ];
  /* eslint-enable @typescript-eslint/no-magic-numbers */

  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  defaultFontSize = this.fontSizeOptions[3];
  defaultShapeShiftingIntensity = 2;
  modifyerOptions = [
    {
      label: 'None', value: 'none',
    },
    {
      label: 'Shake', value: 'shake',
    },
    {
      label: 'Rotate', value: 'rotate',
    },
    {
      label: 'Shadow movement', value: 'shadowMovement',
    },
    {
      label: 'Wave', value: 'wave',
    },
    {
      label: 'Splitting', value: 'splitting',
    },
    {
      label: 'Disappearing', value: 'disappearing',
    },
  ];

  defaultModifyer = this.modifyerOptions[0].value;
  defaultSwapping = false;

  constructor(
    private formBuilder: FormBuilder,
    private wikiService: WikiService,
  ) {}

  ngOnInit(): void {
    this.getNewRandomArticle();

    this.experimentConfig = this.formBuilder.group({
      fontFamily: new FormControl(this.defaultFontFamily),
      fontSize: new FormControl(this.defaultFontSize),
      shapeShiftingIntensity: new FormControl(this.defaultShapeShiftingIntensity),
      modifyer: new FormControl(this.defaultModifyer),
      swapping: new FormControl(this.defaultSwapping),
    });
  }

  getNewRandomArticle(): void {
    this.articles = [];
    this.getRandomArticle();
    this.getRandomArticle();
    this.getRandomArticle();
    this.getRandomArticle();
    this.getRandomArticle();
  }

  getRandomArticle(): void {
    this.wikiService.getWikiRandomArticle().subscribe((article) => {
      this.articles.push(article);
    });
  }
}
