import * as types from "./actionTypes";

export const updateMapFormFields = ( fields ) => ({
  type: types.UPDATE_MAP_FORM_DATA,
  payload: fields,
});

export const updateMapMarker = ( value ) => ({
  type: types.UPDATE_MAP_MARKER_DATA,
  payload: value,
})
