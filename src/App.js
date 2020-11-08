import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import { Route } from 'react-router-dom';

const App = ({state, addPost, updateNewPostText}) => {  
  return (
      <div className='app'>
        <div className='app-wrapper'>
          <Header />
          <Navbar state={state.sidebar}/>
          <div className='app-wrapper-content'>
            <Route exact path='/dialogs' render={() => <Dialogs state={state.dialogsPage}/>} />
            <Route path='/profile' render={() => <Profile profilePage={state.profilePage} addPost={addPost} updateNewPostText={updateNewPostText}/>}/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
          </div>
          </div>
      </div>
    );
}

export default App;