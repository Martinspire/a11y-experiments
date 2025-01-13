import { TreeNode } from 'primeng/api';

export const Experiments: TreeNode[] = [
  {
    key: 'audio',
    label: 'Audio',
    icon: 'pi pi-fw pi-volume-up',
    data: {
      explanation: 'Experiments that show what it is like when your audio system is affected, temporary or permanently.',
      url: '/experiments/audio',
    },
    type: 'url',
    expanded: true,
    children: [
      {
        key: 'hearing-loss',
        label: 'Hearing Loss',
        data: {
          explanation: 'When a person has trouble hearing various frequencies of sound.',
          url: '/experiments/audio/hearing-loss',
        },
        icon: 'pi pi-fw pi-megaphone',
        type: 'url',
      },
      {
        key: 'subtitles',
        label: 'Subtitles',
        data: {
          explanation: 'When a person is in a situation where they cant hear what is being said.',
          url: '/experiments/audio/subtitles',
        },
        icon: 'pi pi-fw pi-comment',
        type: 'url',
      },
    ],
  },
  {
    key: 'mind',
    label: 'Mind',
    data: {
      explanation: 'Experiments that show what it is like when your mind is affected, temporary or permanently.',
      url: '/experiments/mind',
    },
    icon: 'pi pi-fw pi-user',
    type: 'url',
    expanded: true,
    children: [
      {
        key: 'consistancy',
        label: 'Consistancy',
        data: {
          explanation: 'When lack of consistancy is a problem.',
          url: '/experiments/mind/consistancy',
        },
        icon: 'pi pi-fw pi-align-justify',
        type: 'disabled',
        selectable: false,
      },
      {
        key: 'distractions',
        label: 'Distractions',
        data: {
          explanation: 'When distractions are a problem.',
          url: '/experiments/mind/distractions',
        },
        icon: 'pi pi-fw pi-bolt',
        type: 'disabled',
        selectable: false,
      },
      {
        key: 'memory',
        label: 'Memory',
        data: {
          explanation: 'When short or long term memory is a problem.',
          url: '/experiments/mind/memory',
        },
        icon: 'pi pi-fw pi-tag',
        type: 'disabled',
        selectable: false,
      },
    ],
  },
  {
    key: 'motion',
    label: 'Motion',
    data: {
      explanation: '',
      url: '/experiments/motion',
    },
    icon: 'pi pi-fw pi-arrow-up-right-and-arrow-down-left-from-center',
    type: 'url',
    expanded: true,
    children: [
      {
        key: 'shaking',
        label: 'Shaking',
        data: {
          explanation: 'When a person is shaking uncontrollably.',
          url: '/experiments/motion/shaking',
        },
        icon: 'pi pi-fw pi-arrows-alt',
        type: 'url',
      },
      {
        key: 'walking',
        label: 'Walking',
        data: {
          explanation: 'When a person is on the move (ie walking).',
          url: '/experiments/motion/walking',
        },
        icon: 'pi pi-fw pi-angle-double-up',
        type: 'disabled',
        selectable: false,
      },
    ],
  },
  {
    key: 'visual',
    label: 'Visual',
    data: {
      explanation: 'Experiments that show what it is like when your visual system is affected, temporary or permanently.',
      url: '/experiments/visual',
    },
    icon: 'pi pi-fw pi-image',
    type: 'url',
    expanded: true,
    children: [
      {
        key: 'blurry-vision',
        label: 'Blurry Vision',
        data: {
          explanation: 'When a person has trouble seeing clearly.',
          url: '/experiments/visual/blurry-vision',
        },
        icon: 'pi pi-fw pi-expand',
        type: 'disabled',
        selectable: false,
      },
      {
        key: 'colorblind',
        label: 'Colorblindness',
        data: {
          explanation: 'When a person has trouble seeing or differentiating between colors.',
          url: '/experiments/visual/colorblindness',
        },
        icon: 'pi pi-fw pi-eye',
        type: 'url',
        expanded: true,
        children: [
          {
            key: 'form',
            label: 'Form',
            data: {
              explanation: 'A form to test your colorblindness.',
              url: '/experiments/visual/colorblindness/form',
            },
            icon: 'pi pi-fw pi-check-square',
            type: 'url',
          },
          {
            key: 'images',
            label: 'Images',
            data: {
              explanation: 'Images to test your colorblindness.',
              url: '/experiments/visual/colorblindness/images',
            },
            icon: 'pi pi-fw pi-image',
            type: 'url',
          },
          {
            key: 'real-world',
            label: 'Real World',
            data: {
              explanation: 'Real world examples of colorblindness.',
              url: '/experiments/visual/colorblindness/real-world',
            },
            icon: 'pi pi-fw pi-globe',
            type: 'url',
          },
        ],
      },
      {
        key: 'contrast',
        label: 'Contrast',
        data: {
          explanation: 'When a person has trouble seeing the difference between tints of colors.',
          url: '/experiments/visual/contrast',
        },
        icon: 'pi pi-fw pi-palette',
        type: 'disabled',
        selectable: false,
      },
      {
        key: 'dyslexia',
        label: 'Dyslexia',
        data: {
          explanation: 'When a person has trouble reading text.',
          url: '/experiments/visual/dyslexia',
        },
        icon: 'pi pi-fw pi-sparkles',
        type: 'url',
      },
      {
        key: 'glaucoma',
        label: 'Glaucoma',
        data: {
          explanation: 'When a person has trouble seeing due to glaucoma - spots in the eyes that block or blur vision.',
          url: '/experiments/visual/glaucoma',
        },
        icon: 'pi pi-fw pi-eraser',
        type: 'disabled',
        selectable: false,
      },
      {
        key: 'impairment',
        label: 'Impairment',
        data: {
          explanation: 'When a person has trouble seeing due to an impairment, either temporary or permanent.',
          url: '/experiments/visual/impairment',
        },
        icon: 'pi pi-fw pi-eye-slash',
        type: 'disabled',
        selectable: false,
      },
      {
        key: 'screenreader',
        label: 'Screenreader',
        data: {
          explanation: 'When a person has trouble seeing and uses a screenreader to navigate the web.',
          url: '/experiments/visual/screenreader',
        },
        icon: 'pi pi-fw pi-headphones',
        type: 'url',
      },
      {
        key: 'too-small',
        label: 'Too Small',
        data: {
          explanation: 'When a person has trouble seeing due to text or images being too small.',
          url: '/experiments/visual/too-small',
        },
        icon: 'pi pi-fw pi-search-plus',
        type: 'disabled',
        selectable: false,
      },
    ],
  },
];
