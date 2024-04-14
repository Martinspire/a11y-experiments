import { CommonModule } from '@angular/common';
import {
  Component, OnInit,
} from '@angular/core';
import {
  FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule,
} from '@angular/forms';
import { GenericLabelValueStringInterface } from '@interfaces/generic.interface';
import { CardComponent } from '@shared/components/card/card.component';
import { AccordionModule } from 'primeng/accordion';
import { Message } from 'primeng/api';
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
import { MessagesModule } from 'primeng/messages';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { StepperModule } from 'primeng/stepper';

@Component({
  selector: 'ae-colorblindness-form',
  standalone: true,
  imports: [
    AccordionModule,
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
    MessagesModule,
    RadioButtonModule,
    ReactiveFormsModule,
    SelectButtonModule,
    SliderModule,
    StepperModule,
  ],
  templateUrl: './colorblindness-form.component.html',
  styleUrl: './colorblindness-form.component.scss',
})
export class ColorblindnessFormComponent implements OnInit {
  experimentConfig!: FormGroup;
  modes: GenericLabelValueStringInterface[] = [
    {
      label: 'None',
      value: 'none',
    },
    {
      label: 'Protanopia',
      value: 'protanopia',
    },
    {
      label: 'Protanomaly',
      value: 'protanomaly',
    },
    {
      label: 'Deuteranopia',
      value: 'deuteranopia',
    },
    {
      label: 'Deuteranomaly',
      value: 'deuteranomaly',
    },
    {
      label: 'Tritanopia',
      value: 'tritanopia',
    },
    {
      label: 'Tritanomaly',
      value: 'tritanomaly',
    },
    {
      label: 'Achromatopsia',
      value: 'achromatopsia',
    },
    {
      label: 'Achromatomaly',
      value: 'achromatomaly',
    },
  ];

  defaultMode: string = this.modes[1].value;
  defaultFilter: string = this.modes[1].value;

  countryOptions: GenericLabelValueStringInterface[] = [
    {
      label: 'Brazil',
      value: 'brazil',
    },
    {
      label: 'France',
      value: 'france',
    },
    {
      label: 'Germany',
      value: 'germany',
    },
    {
      label: 'Italy',
      value: 'italy',
    },
    {
      label: 'Japan',
      value: 'japan',
    },
    {
      label: 'China',
      value: 'china',
    },
    {
      label: 'India',
      value: 'india',
    },
    {
      label: 'USA',
      value: 'usa',
    },
  ];

  date: Date | undefined;
  radio!: string;
  slider = 5;
  messages: Message[] = [
    {
      severity: 'warn',
      summary: 'Warning',
      detail: 'Message Content',
    },
    {
      severity: 'error',
      summary: 'Error',
      detail: 'Message Content',
    },
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.experimentConfig = this.formBuilder.group({
      mode: new FormControl(this.defaultMode),
      filter: new FormControl(this.defaultFilter),
    });
  }
}
