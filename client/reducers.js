/**
 * Root Reducer
 */
import lanes from './modules/Lane/LaneReducer';
import notes from './modules/Note/NoteReducer';
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import intl from './modules/Intl/IntlReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  intl,
  lanes,
  notes,
});
