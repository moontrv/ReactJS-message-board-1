import React from 'react';
import { Consumer } from './Context';
import Channel from './Channel';

const ChannelList = () => {
  return (
    <Consumer>
      { ({ channels }) => (
        <React.Fragment>
          {channels.map( (channel, index) =>
            <Channel 
              key={channel.id.toString()} 
              index={index}         
            />
          )}
        </React.Fragment>
      )}
    </Consumer>
  );
}

export default ChannelList;