import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import adverts from './adverts';
import profile from "./profile";
import uireducer from './uireducer';


export default (history) => combineReducers({
  router: connectRouter(history),
  adverts: adverts,
  profile: profile,
  ui_state: uireducer
})