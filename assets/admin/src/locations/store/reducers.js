import * as types from "./actionTypes";

const initialState = {
  mapForm: {
    address: '',
    city: '',
    area: '',
    state: '',
    zoom: 40,
    height: 400,
    mapPosition: {
      lat: 0,
      lng: 0,
    },
    markerPosition: {
      lat: 0,
      lng: 0,
    }
  },
};

export default function(state = initialState, action) {
  switch ( action.type ) {
    case types.UPDATE_MAP_FORM_DATA:
      return {
        ...state,
        mapForm: {
          ...state.mapForm,
          ...action.payload
        }
      };
      
    default:
      return state;
  }
}
