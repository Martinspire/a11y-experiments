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
      },
    ],
  },
  {
    key: 'motion',
    label: 'Motion',
    data: '/experiments/motion',
    icon: 'pi pi-fw pi-arrows-alt',
  },
  {
    key: 'mind',
    label: 'Mind',
    data: '/experiments/mind',
    icon: 'pi pi-fw pi-user',
  },
  {
    key: 'audio',
    label: 'Audio',
    data: '/experiments/audio',
    icon: 'pi pi-fw pi-volume-up',
  },
];
