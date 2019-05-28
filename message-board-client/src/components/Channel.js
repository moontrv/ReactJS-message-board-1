import React, { PureComponent } from 'react';
import { Consumer } from './Context';
import AddMessageForm from './AddMessageForm';
import ChannelMessage from './ChannelMessage';

class Channel extends PureComponent {

  render() { 
    const { index } = this.props;

    return (
      <div className="channel">
        <Consumer>
          { ({ actions, channels }) => (
            <span className="channel-name" onClick={() => actions.selectChannel(channels[index].id)}>
              <button className="remove-channel" onClick={() => actions.removechannel(channels[index].id)}>x</button>
              { channels[index].name }
              <AddMessageForm index={channels[index].id} />
              <ChannelMessage cID={channels[index].id}  message={channels[index].message} />
            </span> 
          )}
        </Consumer>
  
      </div>
    );
  }
}

export default Channel;