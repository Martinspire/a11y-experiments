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
import { DyslexiaLetterSwapInterface } from '@interfaces/dyslexia.interface';
import { GenericLabelValueStringInterface } from '@interfaces/generic.interface';
import { IWikiRestQuery } from '@interfaces/wiki.interface';
import { CardComponent } from '@shared/components/card/card.component';
import { SwapLetters } from '@shared/constants/dyslexia';
import { WikiService } from '@shared/services/wikipedia.service';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import {
  Observable, forkJoin,
} from 'rxjs';

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
  displayedArticles: IWikiRestQuery[] = [];
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
  modifyerOptions: GenericLabelValueStringInterface[] = [
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

  SwapLetters: DyslexiaLetterSwapInterface[] = SwapLetters;

  constructor(
    private formBuilder: FormBuilder,
    private wikiService: WikiService,
  ) {}

  ngOnInit(): void {
    this.experimentConfig = this.formBuilder.group({
      fontFamily: new FormControl(this.defaultFontFamily),
      fontSize: new FormControl(this.defaultFontSize),
      shapeShiftingIntensity: new FormControl(this.defaultShapeShiftingIntensity),
      modifyer: new FormControl(this.defaultModifyer),
      swapping: new FormControl(this.defaultSwapping),
    });

    this.getNewRandomArticle();
  }

  getNewRandomArticle(): void {
    this.articles = [];
    forkJoin({
      article1: this.getRandomArticle(),
      article2: this.getRandomArticle(),
      article3: this.getRandomArticle(),
      article4: this.getRandomArticle(),
      article5: this.getRandomArticle(),
    }).subscribe({
      next: (articles) => {
        this.articles.push(articles.article1);
        this.articles.push(articles.article2);
        this.articles.push(articles.article3);
        this.articles.push(articles.article4);
        this.articles.push(articles.article5);

        this._displayArticles();
      },
      error: (error) => {
        console.error('error fetching articles', error);
      },
    });
  }

  getRandomArticle(): Observable<IWikiRestQuery> {
    return this.wikiService.getWikiRandomArticle();
  }

  onChange(): void {
    this._displayArticles();
  }

  _displayArticles(): void {
    const newArticles = structuredClone(this.articles);

    if (this.experimentConfig.get('swapping')?.value) {
      this._processSwapping(newArticles);
    }

    this.displayedArticles = newArticles;
  }

  private _processSwapping(newArticles: IWikiRestQuery[]): void {
    newArticles.forEach((article: IWikiRestQuery) => {
      article.title = this._swapLetters(article.title);
      article.extract = this._swapLetters(article.extract);
    });
  }

  private _swapLetters(text: string): string {
    let newText = text;

    // swapping with tempReplacement to avoid conflicts
    this.SwapLetters.forEach((swap: DyslexiaLetterSwapInterface) => {
      newText = newText.replaceAll(swap.original, swap.tempReplacement);
    });
    this.SwapLetters.forEach((swap: DyslexiaLetterSwapInterface) => {
      newText = newText.replaceAll(swap.tempReplacement, swap.swapped);
    });

    return newText;
  }
}
