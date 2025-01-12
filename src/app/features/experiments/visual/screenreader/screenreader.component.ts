import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '@shared/components/card/card.component';
import { SideBySideExampleComponent } from '@shared/components/example/side-by-side-example/side-by-side-example.component';
import { AccordionModule } from 'primeng/accordion';
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
  selector: 'ae-screenreader',
  imports: [
    CardComponent,
    SideBySideExampleComponent,
    AccordionModule,
    ButtonModule,
    CardComponent,
    CascadeSelectModule,
    CheckboxModule,
    ColorPickerModule,
    CommonModule,
    DatePickerModule,
    DragDropModule,
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
    SelectModule,
    SelectButtonModule,
    SliderModule,
    StepperModule,
    ToggleSwitchModule,
  ],
  templateUrl: './screenreader.component.html',
  styleUrl: './screenreader.component.scss',
})
export class ScreenreaderComponent {
  doSomething(): void {
    // supposedly this should navigate somewhere.
  }
}
