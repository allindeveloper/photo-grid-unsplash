import React from "react";
import {
  Item,
  ItemBottomContainer,
  ItemLocation,
  ItemName,
} from "./itemstyles";

const ImageItem = (props) => {
  return (
    <div onClick={() => props.updateData(props.photo)}>
      <Item {...props}>
        <ItemBottomContainer>
          <ItemName>{props.photo.user.name}</ItemName>
          <ItemLocation>{props.photo.user.location}</ItemLocation>
        </ItemBottomContainer>
        <img loading="lazy" src={props.photo.urls.small} alt="" />
      </Item>
    </div>
  );
};

export default ImageItem;
