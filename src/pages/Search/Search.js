import React, { useState } from "react";
import ImageGrid from "../../components/Image/ImageGrid";
import TextInput from "../../components/Input/TextInput";
import GridLoader from "../../components/Loader/GridLoader";
import Aux from "../../components/hoc/_Aux";
import "./home.scoped.scss";
import SpaceBottom from "../../components/Space/SpaceBottom";

const Home = (props) => {
  console.log("props in home", props);
  const ImageService = props.Service(null, null);
  const initialHomeState = {
    data: { photos: [] },
    pageNumber: 1,
    loading: true,
    hasMore: true,
  };

  const [state, setState] = useState(initialHomeState);

  const loadPhotos = async () => {
    const { pageNumber } = state;
    const { Constants } = props;
    const searchData = {
      pageNumber,
      pageSize: 15,
    };
    await ImageService.getAllItems(
      Constants.PHOTOS,
      Constants.UNSPLASH_CLIENT_ID,
      searchData
    )
      .then((res) => {
        const { data } = res;
        setState({
          data: { photos: state.data.photos.concat(data) },
          pageNumber: pageNumber + 1,
          loading: false,
          hasMore: true,
        });
      })
      .catch((err) => alert(err));
  };

  React.useEffect(() => {
    console.log("props in hme", props);
    // loadPhotos()
  }, []);
  return (
    <Aux>
      <div className="jumbotron">
        <TextInput placeholder="Search for photo" />
        <SpaceBottom length={50}/>
        <ImageGrid
          loadMore={loadPhotos}
          hasMore={state.hasMore}
          loader={<GridLoader />}
          threshold={1000}
          photos={state.data.photos}
        />
      </div>
    </Aux>
  );
};
export default Home;
