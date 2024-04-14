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
import { FakeProduct } from '@interfaces/fake.interface';
import { GenericLabelValueStringInterface } from '@interfaces/generic.interface';
import { CardComponent } from '@shared/components/card/card.component';
import { FakeProductsService } from '@shared/services/fake-products.service';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DragDropModule } from 'primeng/dragdrop';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { KnobModule } from 'primeng/knob';
import { MultiSelectModule } from 'primeng/multiselect';
import { PickListModule } from 'primeng/picklist';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
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
    EditorModule,
    FloatLabelModule,
    FormsModule,
    InputGroupAddonModule,
    InputGroupModule,
    InputNumberModule,
    InputSwitchModule,
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
  defaultZoom = 1;

  cities = [
    {
      name: 'Amsterdam', code: 'AMS',
    },
    {
      name: 'Istanbul', code: 'IST',
    },
    {
      name: 'London', code: 'LDN',
    },
    {
      name: 'New York', code: 'NY',
    },
    {
      name: 'Paris', code: 'PRS',
    },
    {
      name: 'Rome', code: 'RM',
    },
  ];

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

  cascadeOptions: any[] = [
    {
      name: 'Australia',
      code: 'AU',
      states: [
        {
          name: 'New South Wales',
          cities: [
            {
              cname: 'Sydney', code: 'A-SY',
            },
            {
              cname: 'Newcastle', code: 'A-NE',
            },
            {
              cname: 'Wollongong', code: 'A-WO',
            },
          ],
        },
        {
          name: 'Queensland',
          cities: [
            {
              cname: 'Brisbane', code: 'A-BR',
            },
            {
              cname: 'Townsville', code: 'A-TO',
            },
          ],
        },
      ],
    },
    {
      name: 'Canada',
      code: 'CA',
      states: [
        {
          name: 'Quebec',
          cities: [
            {
              cname: 'Montreal', code: 'C-MO',
            },
            {
              cname: 'Quebec City', code: 'C-QU',
            },
          ],
        },
        {
          name: 'Ontario',
          cities: [
            {
              cname: 'Ottawa', code: 'C-OT',
            },
            {
              cname: 'Toronto', code: 'C-TO',
            },
          ],
        },
      ],
    },
    {
      name: 'United States',
      code: 'US',
      states: [
        {
          name: 'California',
          cities: [
            {
              cname: 'Los Angeles', code: 'US-LA',
            },
            {
              cname: 'San Diego', code: 'US-SD',
            },
            {
              cname: 'San Francisco', code: 'US-SF',
            },
          ],
        },
        {
          name: 'Florida',
          cities: [
            {
              cname: 'Jacksonville', code: 'US-JA',
            },
            {
              cname: 'Miami', code: 'US-MI',
            },
            {
              cname: 'Tampa', code: 'US-TA',
            },
            {
              cname: 'Orlando', code: 'US-OR',
            },
          ],
        },
        {
          name: 'Texas',
          cities: [
            {
              cname: 'Austin', code: 'US-AU',
            },
            {
              cname: 'Dallas', code: 'US-DA',
            },
            {
              cname: 'Houston', code: 'US-HO',
            },
          ],
        },
      ],
    },
  ];

  editorContent = '<h1>Yar Pirate Ipsum</h1><p><br></p><p>Boatswain spirits transom spanker marooned dance the hempen jig snow Chain Shot booty take a caulk. Fire ship jib salmagundi hands warp Letter of Marque galleon draught log scuttle. Hang the jib grapple lugger skysail ahoy strike colors poop deck port scourge of the seven seas reef.</p><p><br></p><p>Transom quarterdeck bring a spring upon her cable lateen sail execution dock cog snow topsail draught belay. Yard scourge of the seven seas crimp pink Jack Tar keelhaul case shot yo-ho-ho American Main Gold Road. Lass Letter of Marque transom ahoy careen Jack Ketch Sail ho brigantine tack Blimey.</p><p><br></p><p>Gunwalls matey bucko Jack Ketch scuppers fire ship Arr case shot grog blossom chandler. Hang the jib avast salmagundi Admiral of the Black loot bowsprit sloop heave down bounty Jack Ketch. Spirits plunder brig wherry heave down Jolly Roger measured fer yer chains cable matey lugger.</p>';

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
      inputSwitch: new FormControl(false),
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
