import { TreeNode } from 'primeng/api';

export const Experiments: TreeNode[] = [
  {
    key: 'visual',
    label: 'Visual',
    data: '/experiments/visual',
    icon: 'pi pi-fw pi-image',
    expanded: true,
    children: [
      {
        key: 'colorblind',
        label: 'Colorblindness',
        data: '/experiments/visual/colorblindness',
        icon: 'pi pi-fw pi-circle-fill',
        expanded: true,
        children: [
          {
            key: 'form',
            label: 'Form',
            data: '/experiments/visual/colorblindness/form',
            icon: 'pi pi-fw pi-circle-fill',
          },
          {
            key: 'images',
            label: 'Images',
            data: '/experiments/visual/colorblindness/images',
            icon: 'pi pi-fw pi-image',
          },
        ],
      },
      {
        key: 'dyslexia',
        label: 'Dyslexia',
        data: '/experiments/visual/dyslexia',
        icon: 'pi pi-fw pi-circle-fill',
      },
      {
        key: 'glaucoma',
        label: 'Glaucoma',
        data: '/experiments/visual/glaucoma',
        icon: 'pi pi-fw pi-circle-fill',
      },
    ],
  },
  {
    key: 'motion',
    label: 'Motion',
    data: '/experiments/motion',
    icon: 'pi pi-fw pi-arrows-alt',
    expanded: true,
    children: [
      {
        key: 'shaking',
        label: 'Shaking',
        data: '/experiments/motion/shaking',
        icon: 'pi pi-fw pi-arrows-alt',
      },
    ],
  },
  {
    key: 'mind',
    label: 'Mind',
    data: '/experiments/mind',
    icon: 'pi pi-fw pi-user',
    expanded: true,
    children: [
      {
        key: 'consistancy',
        label: 'Consistancy',
        data: '/experiments/mind/consistancy',
        icon: 'pi pi-fw pi-arrows-alt',
      },
      {
        key: 'distractions',
        label: 'Distractions',
        data: '/experiments/mind/distractions',
        icon: 'pi pi-fw pi-arrows-alt',
      },
      {
        key: 'memory',
        label: 'Memory',
        data: '/experiments/mind/memory',
        icon: 'pi pi-fw pi-arrows-alt',
      },
    ],
  },
  {
    key: 'audio',
    label: 'Audio',
    data: '/experiments/audio',
    icon: 'pi pi-fw pi-volume-up',
    expanded: true,
    children: [
      {
        key: 'screenreader',
        label: 'Screenreader',
        data: '/experiments/audio/screenreader',
        icon: 'pi pi-fw pi-volume-up',
      },
      {
        key: 'subtitles',
        label: 'Subtitles',
        data: '/experiments/audio/subtitles',
        icon: 'pi pi-fw pi-volume-up',
      },
    ],
  },
];
