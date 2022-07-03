export const isUndefined = (value) => {
  return typeof value === 'undefined';
};
export const isNull = (value) => {
  return value === null;
};
export const isUndefinedOrNull = (value) => {
  return isUndefined(value) || isNull(value);
};
export const isUndefinedOrNullOrNotArray = (value) => {
  return isUndefinedOrNull(value) || !Array.isArray(value);
};
export const isUndefinedOrNullOrArrayEmpty = (value) => {
  return isUndefinedOrNullOrNotArray(value) || (Array.isArray(value) && value.length === 0);
};
export const isUndefinedOrNullOrNotObject = (value) => {
  return isUndefinedOrNull(value) || typeof value !== 'object';
};
export const isUndefinedOrNullOrObjectEmpty = (value) => {
  return isUndefinedOrNullOrNotObject(value) || Object.getOwnPropertyNames(value).length === 0;
};
export const isUndefinedOrNullOrNotString = (value) => {
  return isUndefinedOrNull(value) || typeof value !== 'string';
};
export const isUndefinedOrNullOrStringEmpty = (value) => {
  return isUndefinedOrNullOrNotString(value) || value === '';
};
export const isUndefinedOrNullOrNotBoolean = (value) => {
  return isUndefinedOrNull(value) || typeof value !== 'boolean';
};
export const isUndefinedOrNullOrBooleanFalse = (value) => {
  return isUndefinedOrNullOrNotBoolean(value) || value === false;
};
export const isUndefinedOrNullOrNotFunction = (value) => {
  return isUndefinedOrNull(value) || typeof value !== 'function';
};
export const isUndefinedOrNullOrNotNumber = (value) => {
  return isUndefinedOrNull(value) || typeof value !== 'number' || Number.isNaN(value);
};
export const isUndefinedOrNullOrNumberZero = (value) => {
  return isUndefinedOrNullOrNotNumber(value) || value === 0;
};
export const isUndefinedOrNullOrNotDate = (value) => {
  return !isUndefinedOrNullOrNotArray(value) || isUndefinedOrNullOrNotObject(value) || isUndefinedOrNullOrNotNumber(Date.parse(value));
};
