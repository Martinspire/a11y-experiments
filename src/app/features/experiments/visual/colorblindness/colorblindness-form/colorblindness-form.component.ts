import { CommonModule } from '@angular/common';
import {
  Component, OnInit, inject,
} from '@angular/core';
import {
  FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule,
} from '@angular/forms';
import { GenericLabelValueStringInterface } from '@interfaces/generic.interface';
import { CardComponent } from '@shared/components/card/card.component';
import { AccordionModule } from 'primeng/accordion';
import { ToastMessageOptions } from 'primeng/api/toastmessage';
import { ButtonModule } from 'primeng/button';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DatePickerModule } from 'primeng/datepicker';
import { DragDropModule } from 'primeng/dragdrop';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { KnobModule } from 'primeng/knob';
import { MessagesModule } from 'primeng/messages';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectModule } from 'primeng/select';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { StepperModule } from 'primeng/stepper';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'ae-colorblindness-form',
  imports: [
    AccordionModule,
    ButtonModule,
    DatePickerModule,
    CardComponent,
    CascadeSelectModule,
    CheckboxModule,
    ColorPickerModule,
    CommonModule,
    DragDropModule,
    SelectModule,
    FloatLabelModule,
    FormsModule,
    InputGroupAddonModule,
    InputGroupModule,
    InputNumberModule,
    InputTextModule,
    KnobModule,
    MessagesModule,
    RadioButtonModule,
    ReactiveFormsModule,
    SelectButtonModule,
    SliderModule,
    StepperModule,
    ToggleSwitchModule,
  ],
  templateUrl: './colorblindness-form.component.html',
  styleUrl: './colorblindness-form.component.scss',
})
export class ColorblindnessFormComponent implements OnInit {
  private formBuilder = inject(FormBuilder);

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
  messages: ToastMessageOptions[] = [
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

  ngOnInit(): void {
    this.experimentConfig = this.formBuilder.group({
      mode: new FormControl(this.defaultMode),
      filter: new FormControl(this.defaultFilter),
    });
  }
}
