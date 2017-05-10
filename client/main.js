//Any JS in here is automatically ran for us

//Import the react library
import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './component/images'

//Create a component
const App = () => {
  return (
    <div>
      <ImageList />
    </div>
  );
};

//render this component to the screen
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
