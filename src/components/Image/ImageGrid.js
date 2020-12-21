import React, { Component, useState } from "react"
import InfiniteScroll from "react-infinite-scroller"
import { Container } from "./styles"

import ImageItem from "./ImageItem"
import GridLoader from "../Loader/GridLoader"
import PhotoModal from "../Modal/PhotoModal"
const ImageGrid = (props) => {
  
  const [show, setModal] = useState(true)
  const [data, setData] = useState({});
  const updateData = (item)=>{
    setData({})
    setData(item)
    setModal(true)
  }

  const toggleModal =() => {
    setModal(!show);
  }

  const { loading, photos, loadMore, hasMore, threshold, classname, columnCount } = props
  if (!loading) {
    let row = []

    row = photos && photos.map((photo, i) => <ImageItem key={i} updateData={updateData} alt="placeholder" photo={photo} />)

    return (
      <><InfiniteScroll
        loadMore={loadMore}
        initialLoad={false}
        hasMore={hasMore}
        // loader={<GridLoader />}
        threshold={threshold}
        className={classname}
      >
        <Container columnCount={columnCount}>{row}</Container>
      </InfiniteScroll>

      
     {Object.keys(data).length >0&&<PhotoModal
      toggleModal={toggleModal} 
      data={data}
      show={show}
      />}


      </>
    )
  } 
  else {
    return (
      <>
          <GridLoader />
      </>
    )
  }
  
}

export default ImageGrid
