// Import Actions
import { CREATE_LANE, UPDATE_LANE, DELETE_LANE, EDIT_LANE } from './LaneActions';

// Initial State
const initialState = {};

export default function lanes(state = initialState, action) {
  switch (action.type) {
  	case CREATE_LANE:
  		return [...state, action.lane];
  	case UPDATE_LANE:
  		return state.map(lane => {
    		return lane.id === action.id ? { ...lane, ...action.lane } : lane;
  	});
    case EDIT_LANE: {
      const lane = { ...state[action.id], editing: true };
      return { ...state, [action.id]: lane };
      }  
    default:
      return state;
    }
}

export default LaneReducer;

