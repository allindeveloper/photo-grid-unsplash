import React, { useState } from "react";
import ImageGrid from "../../components/Image/ImageGrid";
import GridLoader from "../../components/Loader/GridLoader";
import Aux from "../../components/hoc/_Aux";
import "./search.scoped.scss";
import SpaceBottom from "../../components/Space/SpaceBottom";
import { SearchLabel } from "../../components/Label/SearchLabel";

const Search = (props) => {
  console.log("props in search", props);
  const {location} = props
  const SearchService = props.Service(null, null);
  const initialHomeState = {
    data: { photos: [] },
    pageNumber: 1,
    loading: location && location.state,
    hasMore: true,
  };

  const [state, setState] = useState(initialHomeState);

  const loadPhotos = async () => {
    const { pageNumber } = state;
    const { Constants } = props;
    const searchData = {
      pageNumber,
      pageSize: 15,
      query : location.state && location.state.userQuery
    };
    await SearchService.searchAllItems(
      Constants.SEARCH,
      Constants.PHOTOS,
      Constants.UNSPLASH_CLIENT_ID,
      searchData
    )
      .then((res) => {
        const { data } = res;
        setState({
          data: { photos: state.data.photos.concat(data.results) },
          pageNumber: pageNumber + 1,
          loading: false,
          hasMore: true,
        });
      })
      .catch((err) => alert(err));
  };

  React.useEffect(() => {
    loadPhotos()
  }, []);
  return (
    <Aux>
      <div className="jumbotron">
        <SearchLabel value={location.state.userQuery}/>
        <SpaceBottom length={50}/>
        <ImageGrid
          loadMore={loadPhotos}
          hasMore={state.hasMore}
          loader={<GridLoader />}
          threshold={1000}
          photos={state.data.photos}
          loading={state.loading}
        />
      </div>
    </Aux>
  );
};
export default Search;
