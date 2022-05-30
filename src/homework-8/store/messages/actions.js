import {BOT_AUTHOR} from "../../constants/authors";
import {createMessage} from "../../helpers";

export const ADD_MESSAGE = 'ADD_MESSAGE'
export const REMOVE_MESSAGES_BY_CHAT_ID = 'REMOVE_MESSAGES_BY_CHAT_ID'

export const SET_TIMER_ID = 'SET_TIMER_ID'
export const REMOVE_TIMER_ID = 'REMOVE_TIMER_ID'

export const addMessage = (message, chatId) => ({
  type: ADD_MESSAGE,
  payload: {
    message,
    chatId,
  },
})

export const removeMessagesByChatID = (chatId) => ({
  type: REMOVE_MESSAGES_BY_CHAT_ID,
  payload: chatId
})

export const clearSendMessageTimer = (dispatch, getState) => {
  const prevTimerId = getState().messages.sendMessageTimerID;
  clearTimeout(prevTimerId);
  dispatch({
    type: REMOVE_TIMER_ID,
  })
}

export const sendMessageWithThunk = (author, text, chatId) => (dispatch) => {
  dispatch(clearSendMessageTimer);

  const userMessage = createMessage(author, text)
  dispatch(addMessage(userMessage, chatId));

  if (author === BOT_AUTHOR) {
    return;
  }

  const botMessage = createMessage(BOT_AUTHOR, 'hello')

  const timerId = setTimeout(() => {
    dispatch(addMessage(botMessage, chatId));
  }, 2000);

  dispatch({
    type: SET_TIMER_ID,
    payload: timerId,
  })
}
