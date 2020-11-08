import state from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, updateNewPostText, subscribe} from './redux/state';
import {BrowserRouter} from 'react-router-dom';

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </BrowserRouter>, 
    document.getElementById('root'));
}

rerenderEntireTree()

subscribe(rerenderEntireTree);