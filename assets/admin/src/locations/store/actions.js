import * as types from "./actionTypes";

export const updateMapFormFields = ( fields ) => ({
  type: types.UPDATE_MAP_FORM_DATA,
  payload: fields
});

export const changeMarkerIcon = ( changeType, changeValue ) => ({
  type: types.UPDATE_MARKER_ICON,
  payload: { changeType, changeValue }
});
