import { IMushroomFeatures } from './interfaces/formModel';

export const mushroomFeature: IMushroomFeatures[] = [
  {
    feature: 'cap-surface',
    options: { fibrous: 0, grooves: 1, smooth: 2, scaly: 3, '': 4 },
    description: 'The surface on top of the mushroom'
  },
  {
    feature: 'bruises',
    options: { no: 0, bruises: 1, '': 2 },
    description: 'damage or markings'

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
    description: 'Smell'

  },
  {
    feature: 'gill-attachment',
    options: { attached: 0, free: 1, '': 2 },
    description: 'Gills attached to the stem'

  },
  {
    feature: 'gill-spacing',
    options: { close: 0, crowded: 1, '': 2 },
    description: 'Space between gilss'

  },
  {
    feature: 'gill-size',
    options: { broad: 0, narrow: 1, '': 2 },
    description: 'Size of gill'

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
    description: 'The Color of the gill'
  },
  {
    feature: 'stalk-shape',
    options: { enlarging: 0, tapering: 1, '': 2 },
    description:' Shape of the Stock'
  },
  {
    feature: 'stalk-root',
    options: { missing: 0, bulbous: 1, club: 2, equal: 3, rooted: 4, '': 5 },
    description:'root condition and shape'
  },
  {
    feature: 'stalk-surface-above-ring',
    options: { fibrous: 0, silky: 1, smooth: 2, scaly: 3, '': 4 },
    description:'Surface of the stalk above the ring'
  },
  {
    feature: 'stalk-surface-below-ring',
    options: { fibrous: 0, silky: 1, smooth: 2, scaly: 3, '': 4 },
    description:'Surface of the stalk below the ring'

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
    description:'Color of the stalk above the ring'

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
    description:'Color of the stalk below the ring'

  },
  {
    feature: 'ring-number',
    options: { none: 0, one: 1, two: 2, '': 3 },
    description:'Number of rings on the mushroom'

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
    description:'Quantity of mushrooms around its habitat'

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
    description:'The environment that the mushroom is in.'
  },
];
