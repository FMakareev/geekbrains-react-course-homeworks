import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {profileReducer} from "./profile/reducer";
import {messagesReducer} from "./messages/reducer";
import {chatsReducer} from "./chats/reducer";
import {animalsReducer} from "./animals";
import {userReducer} from "./user/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  animals: animalsReducer,
  profile: profileReducer,
  messages: messagesReducer,
  chats: chatsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
