import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import { BrowserRouter, Routes, Route} from "react-router-dom";


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-brooker'>
        <Header />
        <Navbar />
        <div class='app-brooker-content'>
          <Routes>
          <Route path='/dialogs' element={<Dialogs/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='news' element={<News/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/setting' element={<Setting/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>)
}

export default App;


