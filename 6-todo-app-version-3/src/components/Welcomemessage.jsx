import React from "react";
import Emoji from 'react-emoji-render';

const Welcomemessage = ({todoitems}) => {
  return (
    todoitems.length ===0 &&
  <h3>You have done all your works Enjoy the rest of the day <Emoji text=":smile:"></Emoji></h3>
  )
}
export default Welcomemessage;