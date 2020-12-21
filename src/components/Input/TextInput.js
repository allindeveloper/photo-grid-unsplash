import React from "react";
import { FaSearch } from "react-icons/fa";

import "./input.scoped.scss";
const TextInput = (props) => {
  return (
    <div className="inputWithIcon">
      <input type="text" value={props.value} onKeyPress={props.onKeyPress} onChange={props.onChange} placeholder={props.placeholder} />
      <i aria-hidden="true">
        <FaSearch size="1.5em"/>
      </i>
    </div>
  );
};

export default TextInput;
