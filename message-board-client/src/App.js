import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from './components/Header';
import ChannelList from './components/ChannelList';
import MessageList from './components/MessageList';
import AddChannelForm from './components/AddChannelForm';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
        </div>
        <div className="messageboard">
          <Header />
          <Switch>
            <Route exact path="/" component={ChannelList} />
            <Route path="/message" component={MessageList} />
          </Switch>
          {/* <ChannelList />
          <AddChannelForm /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
