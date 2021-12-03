import { IFormInput } from '../../interfaces/formModel';

var _ = require('lodash');

export const defaultValues: IFormInput = {
  capSurface: 4,
  bruises: 2,
  odor: 9,
  gillAttachment: 2,
  gillSpacing: 2,
  gillSize: 2,
  gillColor: 12,
  stalkShape: 2,
  stalkRoot: 5,
  stalkSurfaceAboveRing: 4,
  stalkSurfaceBelowRing: 4,
  stalkColorAboveRing: 9,
  stalkColorBelowRing: 9,
  ringNumber: 3,
  population: 6,
  habitat: 7,
};

export const validation = (data: IFormInput) => {
  if (_.isEqual(data, defaultValues)) {
    alert('Form is empty');
    return {
      isValid: false,
      feature: '',
    };
  }
  if (data.bruises === defaultValues.bruises) {
    return {
      isValid: false,
      feature: 'Bruises',
    };
  }
  if (data.capSurface === defaultValues.capSurface) {
    return {
      isValid: false,
      feature: 'Cap surface',
    };
  }
  if (data.gillAttachment === defaultValues.gillAttachment) {
    return {
      isValid: false,
      feature: 'Gill Attachment Above Ring',
    };
  }
  if (data.gillColor === defaultValues.gillColor) {
    return {
      isValid: false,
      feature: 'Gill Color Above Ring',
    };
  }
  if (data.gillSize === defaultValues.gillSize) {
    return {
      isValid: false,
      feature: 'Gill Size',
    };
  }
  if (data.gillSpacing === defaultValues.gillSpacing) {
    return {
      isValid: false,
      feature: 'Gill Spacing',
    };
  }
  if (data.habitat === defaultValues.habitat) {
    return {
      isValid: false,
      feature: 'Habitat',
    };
  }
  if (data.odor === defaultValues.odor) {
    return {
      isValid: false,
      feature: 'Odor',
    };
  }
  if (data.population === defaultValues.population) {
    return {
      isValid: false,
      feature: 'Population',
    };
  }
  if (data.ringNumber === defaultValues.ringNumber) {
    return {
      isValid: false,
      feature: 'Ring Number',
    };
  }
  if (data.stalkColorAboveRing === defaultValues.stalkColorAboveRing) {
    return {
      isValid: false,
      feature: 'Stalk Color Above Ring',
    };
  }
  if (data.stalkColorBelowRing === defaultValues.stalkColorBelowRing) {
    return {
      isValid: false,
      feature: 'Stalk Color Below Ring',
    };
  }
  if (data.stalkRoot === defaultValues.stalkRoot) {
    return {
      isValid: false,
      feature: 'Stalk Root',
    };
  }
  if (data.stalkShape === defaultValues.stalkShape) {
    return {
      isValid: false,
      feature: 'Stalk Shape',
    };
  }
  if (data.stalkSurfaceAboveRing === defaultValues.stalkSurfaceAboveRing) {
    return {
      isValid: false,
      feature: 'Stalk Surface Above Ring',
    };
  }
  if (data.stalkSurfaceBelowRing === defaultValues.stalkSurfaceBelowRing) {
    return {
      isValid: false,
      feature: 'Stalk Surface Below Ring',
    };
  }

  return {
    isValid: true,
    feature: '',
  };;
};
