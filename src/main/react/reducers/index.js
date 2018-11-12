import {combineReducers} from 'redux';
import links from './linkReducer';
import theme from "./themeReducer";

export default combineReducers({
  links,
  theme,
});