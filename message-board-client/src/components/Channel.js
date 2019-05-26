import React, { PureComponent } from 'react';
import { Consumer } from './Context';
import AddMessageForm from './AddMessageForm';

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
            </span> 
          )}
        </Consumer>
  
      </div>
    );
  }
}

export default Channel;