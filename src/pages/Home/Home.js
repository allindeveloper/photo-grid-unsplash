import React, { useState, useRef } from "react";
import ImageGrid from "../../components/Image/ImageGrid";
import TextInput from "../../components/Input/TextInput";
import GridLoader from "../../components/Loader/GridLoader";
import Aux from "../../components/hoc/_Aux";
import "./home.scoped.scss";
import SpaceBottom from "../../components/Space/SpaceBottom";
import _ from 'lodash'
import { withRouter } from "react-router-dom";
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
  const [userQuery, setUserQuery] = useState("");
  const loadPhotos = async () => {
    const { pageNumber } = state;
    const { Constants } = props;
    const searchData = {
      pageNumber,
      pageSize: 15,
      query : userQuery && userQuery
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
   loadPhotos()
  }, []);

  const delayedQuery = useRef(_.debounce(q => sendQuery(q), 500)).current;
  const handleInputChange = e => {
    setUserQuery(e.target.value);
    delayedQuery(e.target.value);
  };

  const sendQuery = query => {
    console.log(`Querying for ${query}`)
    setUserQuery(query)
    setState((prevState) => {
      return {
        ...prevState,
        loading: true,
      };
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('do validate');
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
export default Home;
