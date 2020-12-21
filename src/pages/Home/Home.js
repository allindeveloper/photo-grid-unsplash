import React, { useState, useRef } from "react";
import ImageGrid from "../../components/Image/ImageGrid";
import TextInput from "../../components/Input/TextInput";
import GridLoader from "../../components/Loader/GridLoader";
import Aux from "../../components/hoc/_Aux";
import "./home.scoped.scss";
import SpaceBottom from "../../components/Space/SpaceBottom";
const Home = (props) => {
  const ImageService = props.Service(null, null);
  const initialHomeState = {
    data: { photos: [] },
    pageNumber: 1,
    loading: true,
  };

  const [state, setState] = useState(initialHomeState);
  const [userQuery, setUserQuery] = useState("");
  const loadPhotos = async () => {
    const { pageNumber } = state;
    const { Constants } = props;
    const searchData = {
      pageNumber,
      pageSize: 8,
      query : userQuery == "" ? "African" : userQuery,
      orderBy: "latest"
    };
    await ImageService.searchAllItems(
      Constants.SEARCH,
      Constants.PHOTOS,
      Constants.UNSPLASH_CLIENT_ID,
      searchData
    )
      .then((res) => {
        const { data } = res;
        setState({
          data: { photos: data.results },
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

  const handleInputChange = e => {
    setUserQuery(e.target.value);
  };



  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      props.history.push({
        pathname:"/search/result",
        state:{
          loading:true, userQuery
        }
      })
    }
  }



  return (
    <Aux>
      <div className="jumbotron">
        <TextInput placeholder="Search for photo" onKeyPress={handleKeyDown} value={userQuery} onChange={handleInputChange} />
        <SpaceBottom length={50}/>
        

        <ImageGrid
          loader={<GridLoader />}
          photos={state.data.photos}
          loading={state.loading}
        />
      </div>
    </Aux>
  );
};
export default Home;
