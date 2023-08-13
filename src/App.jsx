import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelContainer, ChannelListContainaer, Auth } from './components';

import './App.css'

const apiKey = 's2cyj2m6sake';

const client = StreamChat.getInstance(apiKey)

const AuthToken = false

const App = () => {
  if(!AuthToken) return <Auth />
  
  return (
    <div>
      <div className="app__wrapper">
        <Chat client={client} theme='team light'>
          <ChannelListContainaer />

          <ChannelContainer />
        </Chat>
      </div>
    </div>
  )
}

export default App
