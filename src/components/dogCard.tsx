//This is an example component so you can get things going and take a look at some of Material-UIs features.
//You should probably delete or modify this to start your project! 
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IAppState } from '../store/store';
import { loadDogAction } from '../actions/dogActions';


export default function DogCard() {
  //this object represents the classes that we defined 
  //here we declare what we want to take from the redux store with the useSelector() hook
  //every time one of these properties is updated on the store, our component will re-render to reflect it
  const dogPic = useSelector((state: IAppState) => state.dogState.image);
  const loading = useSelector((state: IAppState) => state.dogState.loading);
  const errorMessage = useSelector((state: IAppState) => state.dogState.errorMessage);
  //this hook allows us to access the dispatch function
  const dispatch = useDispatch();
  //here we define simple stateless components for the card image and error messages
  //notice how we dispatch the call to end the loading of the image based on the img element's onLoad event 
  const cardImage = (src: string) => 
  <img alt="doggo" onLoad={() => dispatch(loadDogAction(false))} src={src}></img>

  const cardError = (message: string) => <h1>{message}</h1>

  return (
    <div>
        {dogPic? cardImage(dogPic) : ''}
        <div>
        {!loading && !dogPic && !errorMessage? <h2>Waiting for doggo...</h2> : ''}
        {loading? <div>Loading</div> : ''}
        {errorMessage && !dogPic && !loading? cardError(errorMessage) : ''}
        </div>
    </div>
  );
}