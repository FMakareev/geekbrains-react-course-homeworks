import { makeStyles } from "@material-ui/core/styles";
import { ChatList } from "../../components/ChatList";
import { CHATS } from "../../mocks/chats";
import {useState} from "react";

const useStyles = makeStyles({
  wrapper: {
    display: "grid",
    gridTemplateColumns: "200px 1fr"
  }
});

export const Chats = ({children}) => {
  const classes = useStyles();
  const [chats, setChats] = useState(CHATS);

  const onRemove = (chatId) => {
    setChats(chats.filter(({id}) => id !== chatId))
  }

  return (
    <div className={classes.wrapper}>
      <ChatList onRemove={onRemove} list={chats} />
      <div>
        {
          children
        }
      </div>
    </div>
  );
};
