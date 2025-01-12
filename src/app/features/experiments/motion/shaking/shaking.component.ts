import { CommonModule } from '@angular/common';
import {
  Component, OnInit, inject,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule, ReactiveFormsModule,
} from '@angular/forms';
import { FakeProduct } from '@interfaces/fake.interface';
import { GenericLabelValueStringInterface } from '@interfaces/generic.interface';
import { CardComponent } from '@shared/components/card/card.component';
import {
  CascadeOptions, Cities, CountryOptions, EditorContent,
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

@Component({
  selector: 'ae-shaking',
  imports: [
    ButtonModule,
    DatePickerModule,
    CardComponent,
    CascadeSelectModule,
    CheckboxModule,
    ColorPickerModule,
    CommonModule,
    DragDropModule,
    SelectModule,
    EditorModule,
    FloatLabelModule,
    FormsModule,
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
    SelectButtonModule,
    SliderModule,
    StepperModule,
    ToggleSwitchModule,
  ],
  templateUrl: './shaking.component.html',
  styleUrl: './shaking.component.scss',
})
export class ShakingComponent implements OnInit {
  private fakeProductsService = inject(FakeProductsService);
  private formBuilder = inject(FormBuilder);

  experimentConfig!: FormGroup;
  formGroup!: FormGroup;

  defaultShaking = 6;
  defaultSpeed = 200;
  defaultZoom = 1;

  cities = Cities;

  countryOptions: GenericLabelValueStringInterface[] = CountryOptions;

  cascadeOptions = CascadeOptions;

  editorContent = EditorContent;

  sourceProducts: FakeProduct[] = this.fakeProductsService.getProductsData();
  targetProducts: FakeProduct[] = [];

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
      toggleSwitch: new FormControl(false),
      inputText: new FormControl(''),
      knob: new FormControl(24),
      multiselect: new FormControl([]),
      radioButton: new FormControl(''),
      rating: new FormControl(0),
      selectButton: new FormControl(''),
      slider: new FormControl(0),
      stepper: new FormControl(0),
      switch: new FormControl(false),
    });

    this.experimentConfig = this.formBuilder.group({
      shakeIntensity: new FormControl(this.defaultShaking),
      speedIntensity: new FormControl(this.defaultSpeed),
      zoomIntensity: new FormControl(this.defaultZoom),
    });
  }
}
