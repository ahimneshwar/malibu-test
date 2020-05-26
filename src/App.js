import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

const App = () => {

  const [stories, setStories] = useState([])

  useEffect(() => {
    axios.get('https://thequint-malibu-beta.quintype.io/api/v1/stories')
      .then(function (r) {
        console.log(r.data.stories[0]);
        console.table(r.data.stories);
        setStories(r.data.stories)
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  return (<>
    {/* <div className="row"> */}
    <div className="flex-container">
      {stories.map(story => (
        <div className="col">
          <img src={`https://images.assettype.com/${story["hero-image-s3-key"]}`} alt="story" className="image" />
          <h5>{story.headline}</h5>
          <p> By <strong> {story["author-name"]}</strong></p>
        </div>
      ))
      }
    </div>

    {/* </div> */}

  </>)
}
export default App

