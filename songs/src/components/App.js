import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

 const App = () => {
  return (
    <div className="ui container grid" style={{'margin-top': '30px'}}>
     <div className="ui row">
      <div className="column eight wide">
       <SongList />
      </div>
      <div className="column eight wide">
       <SongDetail />
      </div>
     </div>
    </div>
  )
};

export default App;

