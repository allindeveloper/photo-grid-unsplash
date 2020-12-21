import React, { Component, useState } from "react";
import { Container } from "./styles";
import ImageItem from "./ImageItem";
import GridLoader from "../Loader/GridLoader";
import PhotoModal from "../Modal/PhotoModal";
const ImageGrid = (props) => {
  const [show, setModal] = useState(true);
  const [data, setData] = useState({});
  const updateData = (item) => {
    setData({});
    setData(item);
    setModal(true);
  };

  const toggleModal = () => {
    setModal(!show);
  };

  const { loading, photos, columnCount } = props;
  if (!loading) {
    let row = [];

      row =
      photos &&
      photos.map((photo, i) => (
        <ImageItem
          key={i}
          updateData={updateData}
          alt="placeholder"
          photo={photo}
        />
      ));

    return (
      <>
        <Container columnCount={columnCount}>{row}</Container>

        {Object.keys(data).length > 0 && (
          <PhotoModal toggleModal={toggleModal} data={data} show={show} />
        )}
      </>
    );
  } else {
    return (
      <>
        <GridLoader />
      </>
    );
  }
};

export default ImageGrid;
