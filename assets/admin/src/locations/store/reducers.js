import * as types from "./actionTypes";

const initialState = {
  mapForm: {
    address: '',
    city: '',
    area: '',
    state: '',
    zoom: 40,
    height: 400,
    width: 700,
    mapPosition: {
      lat: 0,
      lng: 0,
    },
    markerPosition: {
      lat: 0,
      lng: 0,
    },
    markerIcon: {
      type: "office",
      color: "red",
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

      case types.UPDATE_MARKER_ICON:
        return {
          ...state,
          mapForm: {
            ...state.mapForm,
            markerIcon: {
              ...state.mapForm.markerIcon,
              [ action.payload.changeType ]: action.payload.changeValue
            }
          }
        };

    default:
      return state;
  }
}
