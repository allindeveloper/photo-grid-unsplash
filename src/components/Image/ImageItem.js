import React from "react"
import {
  Item,
  ItemBottomContainer,
  ItemUser,
  ItemUserPicture,
  ItemName,
} from "./itemstyles"

const ImageItem = (props) => {
return (
    <div onClick={()=>props.updateData(props.photo)}><Item {...props}>
      
      <ItemBottomContainer>
        <ItemUser>
          <ItemUserPicture src={props.photo.user.profile_image.medium} alt={props.photo.alt_description} />
          <ItemName>{props.photo.user.name}</ItemName>
        </ItemUser>
      </ItemBottomContainer>
      <img loading="lazy" src={props.photo.urls.small} alt="" />
    </Item>
    </div>
  )
}

export default ImageItem
