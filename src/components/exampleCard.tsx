import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RandomDogAction, loadDogAction } from '../actions/dogActions';
import { IAppState } from '../store/store';

export default function SimpleCard() {
  //this hook allows us to access the dispatch function
  const dispatch = useDispatch();
  //the useState() hook allows our component to hold its own internal state
  //the dogName property isn't going to be used anywhere else, so there's no need to hold it on the redux store
  const [dogName, setDogName] = useState('');
  //here we watch for the loading prop in the redux store. every time it gets updated, our component will reflect it
  const isLoading = useSelector((state: IAppState) => state.dogState.loading);

  //a function to dispatch multiple actions
  const getDog = () => {
    dispatch(loadDogAction(true));
    dispatch(RandomDogAction(dogName));
  }

  return (
    <div>
      <div><h2>Find Doggo</h2></div>
      <div>
        <input onChange={(e) => setDogName(e.target.value)} placeholder="Type a dog breed..."  />
        <button onClick={() => getDog()}> 
          {isLoading? <div color="secondary"></div> : <h3>get {dogName} doggo</h3>}
        </button>
      </div>
    </div>
  );
}