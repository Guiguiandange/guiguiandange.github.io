import {
  isUndefinedOrNullOrArrayEmpty,
  isUndefinedOrNullOrNotDate,
  isUndefinedOrNullOrObjectEmpty
} from './lib_types';

export function replaceDatesWithTimestamp(value) {
  if (!isUndefinedOrNullOrNotDate(value)) {
    return value.getTime();
  }
  if (!isUndefinedOrNullOrArrayEmpty(value)) {
    return value.map(arrayElement => replaceDatesWithTimestamp(arrayElement));
  }
  if (!isUndefinedOrNullOrObjectEmpty(value)) {
    const newObject = {};
    Object.keys(value).forEach(function(key) {
      newObject[key] = replaceDatesWithTimestamp(value[key]);
    });
    return newObject;
  }
  return value;
}
