import { IMushroomFeatures } from './interfaces/formModel';

export const mushroomFeature: IMushroomFeatures[] = [
  {
    feature: 'cap-surface',
    options: { fibrous: 0, grooves: 1, smooth: 2, scaly: 3, '': 4 },
  },
  {
    feature: 'bruises',
    options: { no: 0, bruises: 1, '': 2 },
  },
  {
    feature: 'odor',
    options: {
      almond: 0,
      creosote: 1,
      foul: 2,
      anise: 3,
      musty: 4,
      none: 5,
      pungent: 6,
      spicy: 7,
      fishy: 8,
      '': 9,
    },
  },
  {
    feature: 'gill-attachment',
    options: { attached: 0, free: 1, '': 2 },
  },
  {
    feature: 'gill-spacing',
    options: { close: 0, crowded: 1, '': 2 },
  },
  {
    feature: 'gill-size',
    options: { broad: 0, narrow: 1, '': 2 },
  },
  {
    feature: 'gill-color',
    options: {
      buff: 0,
      red: 1,
      gray: 2,
      chocolate: 3,
      black: 4,
      brown: 5,
      orange: 6,
      pink: 7,
      green: 8,
      purple: 9,
      white: 10,
      yellow: 11,
      '': 12,
    },
  },
  {
    feature: 'stalk-shape',
    options: { enlarging: 0, tapering: 1, '': 2 },
  },
  {
    feature: 'stalk-root',
    options: { missing: 0, bulbous: 1, club: 2, equal: 3, rooted: 4, '': 5 },
  },
  {
    feature: 'stalk-surface-above-ring',
    options: { fibrous: 0, silky: 1, smooth: 2, scaly: 3, '': 4 },
  },
  {
    feature: 'stalk-surface-below-ring',
    options: { fibrous: 0, silky: 1, smooth: 2, scaly: 3, '': 4 },
  },
  {
    feature: 'stalk-color-above-ring',
    options: {
      buff: 0,
      cinnamon: 1,
      red: 2,
      gray: 3,
      brown: 4,
      orange: 5,
      pink: 6,
      white: 7,
      yellow: 8,
      '': 9,
    },
  },
  {
    feature: 'stalk-color-below-ring',
    options: {
      buff: 0,
      cinnamon: 1,
      red: 2,
      gray: 3,
      brown: 4,
      orange: 5,
      pink: 6,
      white: 7,
      yellow: 8,
      '': 9,
    },
  },
  {
    feature: 'ring-number',
    options: { none: 0, one: 1, two: 2, '': 3 },
  },
  {
    feature: 'population',
    options: {
      abundant: 0,
      clustered: 1,
      numerous: 2,
      scattered: 3,
      several: 4,
      solitary: 5,
      '': 6,
    },
  },
  {
    feature: 'habitat',
    options: {
      woods: 0,
      grasses: 1,
      leaves: 2,
      meadows: 3,
      paths: 4,
      urban: 5,
      waste: 6,
      '': 7,
    },
  },
];
