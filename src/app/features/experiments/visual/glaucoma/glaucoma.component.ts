import { CommonModule } from '@angular/common';
import {
  Component, OnInit,
} from '@angular/core';
import {
  FormBuilder, FormControl,
  FormGroup,
  FormsModule, ReactiveFormsModule,
} from '@angular/forms';
import { FakeProduct } from '@interfaces/fake.interface';
import { GenericLabelValueStringInterface } from '@interfaces/generic.interface';
import { CardComponent } from '@shared/components/card/card.component';
import {
  CascadeOptions,
  Cities, CountryOptions,
  EditorContent,
} from '@shared/constants/form.constants';
import { FakeProductsService } from '@shared/services/fake-products.service';
import { ButtonModule } from 'primeng/button';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DatePickerModule } from 'primeng/datepicker';
import { DragDropModule } from 'primeng/dragdrop';
import { EditorModule } from 'primeng/editor';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { KnobModule } from 'primeng/knob';
import { MultiSelectModule } from 'primeng/multiselect';
import { PickListModule } from 'primeng/picklist';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { SelectModule } from 'primeng/select';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { StepperModule } from 'primeng/stepper';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { GlaucomaCursorComponent } from './glaucoma-cursor/glaucoma-cursor.component';

@Component({
  selector: 'ae-glaucoma',
  standalone: true,
  imports: [
    ButtonModule,
    CardComponent,
    CascadeSelectModule,
    CheckboxModule,
    ColorPickerModule,
    CommonModule,
    DatePickerModule,
    DragDropModule,
    EditorModule,
    FloatLabelModule,
    FormsModule,
    GlaucomaCursorComponent,
    InputGroupAddonModule,
    InputGroupModule,
    InputNumberModule,
    InputTextModule,
    KnobModule,
    MultiSelectModule,
    PickListModule,
    RadioButtonModule,
    RatingModule,
    ReactiveFormsModule,
    SelectModule,
    SelectButtonModule,
    SliderModule,
    StepperModule,
    ToggleSwitchModule,
  ],
  templateUrl: './glaucoma.component.html',
  styleUrl: './glaucoma.component.scss',
})
export class GlaucomaComponent implements OnInit {
  experimentConfig!: FormGroup;
  formGroup!: FormGroup;

  variants: GenericLabelValueStringInterface[] = [
    {
      label: 'Stage 1',
      value: 'stage1',
    },
    {
      label: 'Stage 2',
      value: 'stage2',
    },
    {
      label: 'Stage 3',
      value: 'stage3',
    },
    {
      label: 'Stage 4',
      value: 'stage4',
    },
  ];

  defaultVariant = this.variants[1];

  cities = Cities;

  countryOptions: GenericLabelValueStringInterface[] = CountryOptions;

  cascadeOptions = CascadeOptions;

  editorContent = EditorContent;

  sourceProducts: FakeProduct[] = this.fakeProductsService.getProductsData();
  targetProducts: FakeProduct[] = [];

  constructor(
    private fakeProductsService: FakeProductsService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      check1: new FormControl(true),
      check2: new FormControl(false),
      check3: new FormControl(true),
      check4: new FormControl(false),
      calendar: new FormControl(new Date()),
      cascadeSelect: new FormControl(''),
      colorPicker: new FormControl(''),
      dropdown: new FormControl(''),
      editor: new FormControl(this.editorContent),
      inputNumber: new FormControl(0),
      inputText: new FormControl(''),
      knob: new FormControl(24),
      multiselect: new FormControl([]),
      radioButton: new FormControl(''),
      rating: new FormControl(0),
      selectButton: new FormControl(''),
      slider: new FormControl(0),
      stepper: new FormControl(0),
      switch: new FormControl(false),
      toggleSwitch: new FormControl(false),
    });

    this.experimentConfig = this.formBuilder.group({ variant: new FormControl(this.defaultVariant) });
  }

  setVariant() {
    //
  }
}
