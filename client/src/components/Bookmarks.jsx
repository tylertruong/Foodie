import React from 'react';
import BookmarkEntry from './BookmarkEntry.jsx';
import Map from './Map.jsx';



const Bookmarks = (props) => {
  return (
  <div>
    <Map style="mapbox://styles/mapbox/streets-v8" />
  </div>
    );
}

export default Bookmarks;

/*
    {props.bookmarks.map(bookmark => {
      return <BookmarkEntry bookmark={bookmark} key={bookmark.id} />
    })}

*/