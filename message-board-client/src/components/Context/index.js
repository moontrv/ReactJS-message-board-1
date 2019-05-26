import React, { Component } from 'react';

const MessageboardContext = React.createContext();

export class Provider extends Component {

  state = {
    channels: [
      {
        name: "Channel1",
        message: [],
        id: 1
      },
      {
        name: "Channel2",
        message: [],
        id: 2
      },
      {
        name: "Channel3",
        message: [],
        id: 3
      },
      {
        name: "Channel4",
        message: [],
        id: 4
      }
    ],
    selectChannel: undefined
  };

  // channel id counter
  prevchannelId = 4;

  handleAddchannel = (name) => {
    this.setState(prevState => {
      return {
        channels: [
          ...prevState.channels,
          {
            name,
            message: [],
            id: this.prevchannelId += 1
          }
        ]
      };
    });
  }

  handleRemovechannel = (id) => {
    this.setState(prevState => {
      return {
        channels: prevState.channels.filter(p => p.id !== id)
      };
    });
  }

  addMessage = (value, id) => {
    this.setState(prevState => {
      let newChannel = [...prevState.channels];
      newChannel[id-1].message.push(value);
      return {
        channels: newChannel,
        selectChannel: prevState.selectChannel
      };
    });
  }

  selectChannel = (id) => {
    this.setState(prevState => {
      // let newChannel = [...prevState.channels];
      // newChannel.forEach((item)=>item.message = []);        
      return {
        channels: [
          ...prevState.channels
        ],
        selectChannel : id
      };
    });
  }

  render() {
    return (
      <MessageboardContext.Provider value={{
        channels: this.state.channels,
        actions: {
          selectChannel : this.selectChannel,
          addMessage: this.addMessage,
          removechannel: this.handleRemovechannel,
          addchannel: this.handleAddchannel
        }
      }}>
        {this.props.children}
      </MessageboardContext.Provider>
    );
  }
}

export const Consumer = MessageboardContext.Consumer;