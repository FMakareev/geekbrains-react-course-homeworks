import { List } from "@material-ui/core";
import propTypes from "prop-types";
import { Chat } from "./Chat";

export const ChatList = ({ list, onRemove }) => {
  return (
    <List>
      {list.map((item) => (
        <Chat onRemove={onRemove} key={item.id} {...item} />
      ))}
      <Chat id="1" name="fake" />
    </List>
  );
};

ChatList.propTypes = {
  list: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string
    })
  )
};
