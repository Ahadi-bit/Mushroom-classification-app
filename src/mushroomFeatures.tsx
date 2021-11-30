import { IMushroomFeatures } from './interfaces/formModel';

// cap-surface: fibrous=f,grooves=g,scaly=y,smooth=s
// bruises: bruises=t,no=f
// gill-spacing: close=c,crowded=w,distant=d
// gill-size: broad=b,narrow=n
// gill-color: black=k,brown=n,buff=b,chocolate=h,gray=g, green=r,orange=o,pink=p,purple=u,red=e,white=w,yellow=y
// stalk-shape: enlarging=e,tapering=t

// stalk-color-above-ring: brown=n,buff=b,cinnamon=c,gray=g,orange=o,pink=p,red=e,white=w,yellow=y
// stalk-color-below-ring: brown=n,buff=b,cinnamon=c,gray=g,orange=o,pink=p,red=e,white=w,yellow=y
// veil-type: partial=p,universal=u
// veil-color: brown=n,orange=o,white=w,yellow=y
// ring-type: cobwebby=c,evanescent=e,flaring=f,large=l,none=n,pendant=p,sheathing=s,zone=z
// spore-print-color: black=k,brown=n,buff=b,chocolate=h,green=r,orange=o,purple=u,white=w,yellow=y

export const mushroomFeature: IMushroomFeatures[] = [
  {
    feature: 'cap-surface',
    options: { fibrous: 0, grooves: 1, smooth: 2, scaly: 3 },
  },
  {
    feature: 'bruises',
    options: { no: 0, bruises: 1 },
  },
  {
    // odor: almond=a,anise=l,creosote=c,fishy=y,foul=f,musty=m,none=n,pungent=p,spicy=s
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
    },
  },
  {
    // gill-attachment: attached=a,descending=d,free=f,notched=n
    feature: 'gill-attachment',
    options: { attached: 0, free: 1 },
  },
  {
    feature: 'gill-spacing',
    options: { close: 0, crowded: 1 },
  },
  {
    // gill-size: broad=b,narrow=n

    feature: 'gill-size',
    options: { broad: 0, narrow: 1 },
  },
  {
    // gill-color: black=k,brown=n,buff=b,chocolate=h,gray=g, green=r,orange=o,pink=p,purple=u,red=e,white=w,yellow=y

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
    },
  },
  {
    // stalk-shape: enlarging=e,tapering=t
    feature: 'stalk-shape',
    options: { enlarging: 0, tapering: 1 },
  },
  {
    // stalk-root: bulbous=b,club=c,cup=u,equal=e,rhizomorphs=z,rooted=r,missing=?

    feature: 'stalk-root',
    options: { missing: 0, bulbous: 1, club: 2, equal: 3, rooted: 4 },
  },
  {
    // stalk-surface-above-ring: fibrous=f,scaly=y,silky=k,smooth=s
    // stalk-surface-below-ring: fibrous=f,scaly=y,silky=k,smooth=s
    feature: 'stalk-surface-above-ring',
    options: { fibrous: 0, silky: 1, smooth: 2, scaly: 3 },
  },
  {
    feature: 'stalk-surface-below-ring',
    options: { fibrous: 0, silky: 1, smooth: 2, scaly: 3 },
  },
  {
    // stalk-color-above-ring: brown=n,buff=b,cinnamon=c,gray=g,orange=o,pink=p,red=e,white=w,yellow=y
    // stalk-color-below-ring: brown=n,buff=b,cinnamon=c,gray=g,orange=o,pink=p,red=e,white=w,yellow=y
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
    },
  },
  {
    // ring-number: none=n,one=o,two=t

    feature: 'ring-number',
    options: { none: 0, one: 1, two: 2 },
  },
  {
    // population: abundant=a,clustered=c,numerous=n,scattered=s,several=v,solitary=y
    // habitat: grasses=g,leaves=l,meadows=m,paths=p,urban=u,waste=w,woods=d
    feature: 'population',
    options: {
      abundant: 0,
      clustered: 1,
      numerous: 2,
      scattered: 3,
      several: 4,
      solitary: 5,
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
    },
  },
];
