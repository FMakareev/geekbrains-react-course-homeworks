import { ListItem, ListItemText, ListItemSecondaryAction } from "@material-ui/core";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export const Chat = ({ name, id, onRemove }) => {
  return (
    <ListItem component={Link} to={`/chats/${id}`}>
      <ListItemText>{name}</ListItemText>
      <ListItemSecondaryAction onClick={(e) => {
        e.stopPropagation();
        onRemove(id)
      }}>
        del
      </ListItemSecondaryAction>
    </ListItem>
  );
};

Chat.propTypes = {
  id: propTypes.string,
  name: propTypes.string
};
