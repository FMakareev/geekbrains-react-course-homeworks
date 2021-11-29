import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {createChat} from "../helpers";
import {getChatList} from "../store/chats/selectors";
import {
  addChat,
  addChatWithThunk,
  offTrackingAddChatWithThunk, offTrackingRemoveChatWithThunk,
  onTrackingAddChatWithThunk, onTrackingRemoveChatWithThunk,
  removeChat, removeChatWithThunk
} from "../store/chats/actions";
import {removeMessagesByChatID, removeMessagesByChatIDWithThunk} from "../store/messages/actions";


export const withChats = (Component) => {

  return (props) => {
    const chats = useSelector(getChatList);
    const dispatch = useDispatch();


    const onCreateChat = useCallback(() => {
      dispatch(addChatWithThunk(createChat('chat name')))
    }, []);

    const onDeleteChat = useCallback((chatId) => {
      dispatch(removeChatWithThunk(chatId))
      dispatch(removeMessagesByChatIDWithThunk(chatId))
    }, [])

    useEffect(() => {
      dispatch(onTrackingAddChatWithThunk);
      dispatch(onTrackingRemoveChatWithThunk);

      return () => {
        dispatch(offTrackingAddChatWithThunk);
        dispatch(offTrackingRemoveChatWithThunk);
      }
    }, [])


    return <Component
      {...props}
      chats={chats}
      onCreateChat={onCreateChat}
      onDeleteChat={onDeleteChat}
    />
  }
}
