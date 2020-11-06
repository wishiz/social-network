import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import { BrowserRouter, Route } from 'react-router-dom';

const App = ({state}) => {  
  return (
    <BrowserRouter >
      <div className='app'>
        <div className='app-wrapper'>
          <Header />
          <Navbar state={state.sidebar}/>
          <div className='app-wrapper-content'>
            <Route exact path='/dialogs' render={() => <Dialogs state={state.dialogsPage}/>} />
            <Route path='/profile' render={() => <Profile state={state.profilePage}/>}/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
          </div>
          </div>
      </div>
    </BrowserRouter>
    );
}

export default App;