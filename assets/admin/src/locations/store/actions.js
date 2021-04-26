import * as types from "./actionTypes";

export const updateMapFormFields = ( fields ) => ({
  type: types.UPDATE_MAP_FORM_DATA,
  payload: fields
});
