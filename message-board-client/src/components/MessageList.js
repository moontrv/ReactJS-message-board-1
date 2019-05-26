import React from 'react';
import { Consumer } from './Context';

const MessageList = () => {
  return (
    <Consumer>
      { ({ channels }) => (
        <React.Fragment>
          {channels.map( (channel, index) =>
            <>
              <h2>{channel.name}</h2>
              <p>Message count: {channel.message.length}</p>
              <ol>
                {channel.message.map( (message, index) => <li key={index+message}>{message}</li>) }
              </ol>
            </>
          )}
        </React.Fragment>
      )}
    </Consumer>
  );
}

export default MessageList;