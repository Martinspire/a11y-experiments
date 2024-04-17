import { GenericLabelValueStringInterface } from '@interfaces/generic.interface';

export const Cities: any[] = [
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

export const CountryOptions: GenericLabelValueStringInterface[] = [
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

export const CascadeOptions: any[] = [
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

export const EditorContent = '<h1>Yar Pirate Ipsum</h1><p><br></p><p>Boatswain spirits transom spanker marooned dance the hempen jig snow Chain Shot booty take a caulk. Fire ship jib salmagundi hands warp Letter of Marque galleon draught log scuttle. Hang the jib grapple lugger skysail ahoy strike colors poop deck port scourge of the seven seas reef.</p><p><br></p><p>Transom quarterdeck bring a spring upon her cable lateen sail execution dock cog snow topsail draught belay. Yard scourge of the seven seas crimp pink Jack Tar keelhaul case shot yo-ho-ho American Main Gold Road. Lass Letter of Marque transom ahoy careen Jack Ketch Sail ho brigantine tack Blimey.</p><p><br></p><p>Gunwalls matey bucko Jack Ketch scuppers fire ship Arr case shot grog blossom chandler. Hang the jib avast salmagundi Admiral of the Black loot bowsprit sloop heave down bounty Jack Ketch. Spirits plunder brig wherry heave down Jolly Roger measured fer yer chains cable matey lugger.</p>';
