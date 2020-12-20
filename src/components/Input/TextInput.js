import React from "react";
import { FaSearch } from "react-icons/fa";

import "./input.scoped.scss";
const TextInput = (props) => {
  return (
    <div class="inputWithIcon">
      <input type="text" placeholder={props.placeholder} />
      <i aria-hidden="true">
        <FaSearch size="1.5em"/>
      </i>
    </div>
  );
};

export default TextInput;
