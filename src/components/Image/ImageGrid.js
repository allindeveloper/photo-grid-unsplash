import React, { Component, useState } from "react"
import InfiniteScroll from "react-infinite-scroller"
import { Container } from "./styles"

import ImageItem from "./ImageItem"
import GridLoader from "../Loader/GridLoader"

const ImageGrid = (props) => {
  const { loading, photos, loadMore, hasMore, threshold, classname, columnCount } = props
  if (!loading) {
    let row = []

    row = photos && photos.map((photo, i) => <ImageItem key={i} alt="placeholder" photo={photo} />)

    return (
      <InfiniteScroll
        loadMore={loadMore}
        hasMore={hasMore}
        loader={<GridLoader />}
        threshold={threshold}
        className={classname}
      >
        <Container columnCount={columnCount}>{row}</Container>
      </InfiniteScroll>
    )
  } else {
    return (
      <>
        <Container>
          <GridLoader />
        </Container>
      </>
    )
  }
}

export default ImageGrid
