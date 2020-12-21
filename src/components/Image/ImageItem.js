import React from "react"
import {
  Item,
  ItemTopButtons,
  ItemBottomContainer,
  ItemUser,
  ItemUserPicture,
  ItemName,
} from "./itemstyles"

const ImageItem = (props) => {

  console.log("props imageite,",props)
  return (
    <a href="#popup1" onClick={()=>props.updateData(props.photo)}><Item {...props}>
      
      <ItemBottomContainer>
        <ItemUser>
          <ItemUserPicture src={props.photo.user.profile_image.medium} alt={props.photo.alt_description} />
          <ItemName>{props.photo.user.name}</ItemName>
        </ItemUser>
      </ItemBottomContainer>
      <img loading="lazy" src={props.photo.urls.small} alt="" />
    </Item>
    </a>
  )
}

export default ImageItem
