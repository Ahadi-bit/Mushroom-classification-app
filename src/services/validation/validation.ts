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
      feature: 'Stalk Color Above Ring',
    };
  }
  if (data.bruises === defaultValues.bruises) {
    alert('Bruises is empty');
    return {
      isValid: false,
      feature: 'Bruises',
    };
  }
  if (data.capSurface === defaultValues.capSurface) {
    alert('Cap surface is empty');
    return {
      isValid: false,
      feature: 'Cap surface Above Ring',
    };
  }
  if (data.gillAttachment === defaultValues.gillAttachment) {
    alert('Gill Attachment is empty');
    return {
      isValid: false,
      feature: 'Gill Attachment Above Ring',
    };
  }
  if (data.gillColor === defaultValues.gillColor) {
    alert('Gill Color is empty');
    return {
      isValid: false,
      feature: 'Gill Color Above Ring',
    };
  }
  if (data.gillSize === defaultValues.gillSize) {
    alert('Gill Size is empty');
    return {
      isValid: false,
      feature: 'Gill Size',
    };
  }
  if (data.gillSpacing === defaultValues.gillSpacing) {
    alert('Gill Spacing is empty');
    return {
      isValid: false,
      feature: 'Gill Spacing',
    };
  }
  if (data.habitat === defaultValues.habitat) {
    alert('Habitat is empty');
    return {
      isValid: false,
      feature: 'Habitat',
    };
  }
  if (data.odor === defaultValues.odor) {
    alert('Odor is empty');
    return {
      isValid: false,
      feature: 'Odor',
    };
  }
  if (data.population === defaultValues.population) {
    alert('Population is empty');
    return {
      isValid: false,
      feature: 'Population',
    };
  }
  if (data.ringNumber === defaultValues.ringNumber) {
    alert('Ring Number is empty');
    return {
      isValid: false,
      feature: 'Ring Number',
    };
  }
  if (data.stalkColorAboveRing === defaultValues.stalkColorAboveRing) {
    alert('Stalk Color Above Ring is empty');
    return {
      isValid: false,
      feature: 'Stalk Color Above Ring',
    };
  }
  if (data.stalkColorBelowRing === defaultValues.stalkColorBelowRing) {
    alert('Stalk Color Below Ring is empty');
    return {
      isValid: false,
      feature: 'Stalk Color Below Ring',
    };
  }
  if (data.stalkRoot === defaultValues.stalkRoot) {
    alert('Stalk Root is empty');
    return {
      isValid: false,
      feature: 'Stalk Root',
    };
  }
  if (data.stalkShape === defaultValues.stalkShape) {
    alert('Stalk Shape is empty');
    return {
      isValid: false,
      feature: 'Stalk Shape',
    };
  }
  if (data.stalkSurfaceAboveRing === defaultValues.stalkSurfaceAboveRing) {
    alert('Stalk Surface Above Ring is empty');
    return {
      isValid: false,
      feature: 'Stalk Surface Above Ring',
    };
  }
  if (data.stalkSurfaceBelowRing === defaultValues.stalkSurfaceBelowRing) {
    alert('Stalk Surface Below Ring is empty');
    return {
      isValid: false,
      feature: 'Stalk Surface Below Ring',
    };
  }

  return true;
};
