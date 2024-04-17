import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormsModule, ReactiveFormsModule,
} from '@angular/forms';
import { CardComponent } from '@shared/components/card/card.component';
import { SideBySideExampleComponent } from '@shared/components/example/side-by-side-example/side-by-side-example.component';
import { AccordionModule } from 'primeng/accordion';
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
  selector: 'ae-screenreader',
  standalone: true,
  imports: [
    CardComponent,
    SideBySideExampleComponent,
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
  templateUrl: './screenreader.component.html',
  styleUrl: './screenreader.component.scss',
})
export class ScreenreaderComponent {
  doSomething(): void {
    // supposedly this should navigate somewhere.
  }
}
