import React from "react"
import {
  Item,
  ItemOverlay,
  ItemTopButtons,
  ItemBottomContainer,
  ItemUser,
  ItemUserProfilePicture,
  ItemUserProfileName,
} from "./itemstyles"

const ImageItem = (props) => {
  return (
    <Item {...props}>
      <ItemTopButtons>
        </ItemTopButtons>

      <ItemBottomContainer>
        <ItemUser>
          <ItemUserProfilePicture src={props.photo.user.profile_image.medium} alt={props.photo.alt_description} />
          <ItemUserProfileName>{props.photo.user.name}</ItemUserProfileName>
        </ItemUser>
      </ItemBottomContainer>
      <img loading="lazy" src={props.photo.urls.regular} alt="" />
    </Item>
  )
}

export default ImageItem
