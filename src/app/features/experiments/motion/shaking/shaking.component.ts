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
import { CardComponent } from '@shared/components/card/card.component';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DragDropModule } from 'primeng/dragdrop';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { KnobModule } from 'primeng/knob';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { StepperModule } from 'primeng/stepper';
import { ShakeCursorComponent } from './shake-cursor/shake-cursor.component';

@Component({
  selector: 'ae-shaking',
  standalone: true,
  imports: [
    ButtonModule,
    CalendarModule,
    CardComponent,
    CascadeSelectModule,
    CheckboxModule,
    ColorPickerModule,
    CommonModule,
    DragDropModule,
    DropdownModule,
    FloatLabelModule,
    FormsModule,
    InputGroupAddonModule,
    InputGroupModule,
    InputNumberModule,
    InputSwitchModule,
    InputTextModule,
    KnobModule,
    RadioButtonModule,
    ReactiveFormsModule,
    SelectButtonModule,
    SliderModule,
    StepperModule,
    ShakeCursorComponent,
  ],
  templateUrl: './shaking.component.html',
  styleUrl: './shaking.component.scss',
})
export class ShakingComponent implements OnInit {
  experimentConfig!: FormGroup;
  formGroup!: FormGroup;

  defaultShaking = 6;
  defaultSpeed = 200;
  defaultZoom = 0.5;

  constructor(private formBuilder: FormBuilder) { }

  selectOptions = [
    {
      label: 'Option 1', value: 'option1',
    },
    {
      label: 'Option 2', value: 'option2',
    },
    {
      label: 'Option 3', value: 'option3',
    },
  ];

  countryOptions = [
    {
      label: 'USA', value: 'usa',
    },
    {
      label: 'Germany', value: 'germany',
    },
    {
      label: 'Brazil', value: 'brazil',
    },
    {
      label: 'Italy', value: 'italy',
    },
    {
      label: 'France', value: 'france',
    },
    {
      label: 'Japan', value: 'japan',
    },
    {
      label: 'China', value: 'china',
    },
    {
      label: 'India', value: 'india',
    },
  ];

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      inputText: new FormControl(''),
      inputNumber: new FormControl(0),
      inputSwitch: new FormControl(false),
      radioButton: new FormControl(''),
      selectButton: new FormControl(''),
      slider: new FormControl(0),
      stepper: new FormControl(0),
      calendar: new FormControl(new Date()),
      colorPicker: new FormControl(''),
      cascadeSelect: new FormControl(''),
    });

    this.experimentConfig = this.formBuilder.group({
      shakeIntensity: new FormControl(this.defaultShaking),
      speedIntensity: new FormControl(this.defaultSpeed),
      zoomIntensity: new FormControl(this.defaultZoom),
    });
  }
}
