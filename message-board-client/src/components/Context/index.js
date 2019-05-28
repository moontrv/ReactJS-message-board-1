import React, { Component } from 'react';
const axios = require('axios');

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

  componentWillMount() {
    // GET channels from route localhost:5000/channels
    const request_url = "http://localhost:5000/channels";
    axios.get(request_url)
      .then((response) => {
        this.setState(prevState => {
          return {
            channels: response.data,
            selectChannel: undefined
          };
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  }

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
      newChannel[id - 1].message.push(value);
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
    // GET messages from route localhost:5000/messages/:cID
    // const request_url = "http://localhost:5000/messages/" + id;
    // axios.get(request_url)
    //   .then((response) => {
    //     this.setState(prevState => {
    //       let newState = {
    //         channels: [
    //           ...prevState.channels
    //         ],
    //         selectChannel: id
    //       };
    //       newState.channels.map(a => {
    //         if (a.id === id) {
    //           a.message = response.data;
    //         }
    //         return true;
    //       });
    //       //console.log(newState);
    //       return {
    //         newState
    //       };
    //     });
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    //   .finally(function () {
    //   });
  }

  render() {
    return (
      <MessageboardContext.Provider value={{
        channels: this.state.channels,
        actions: {
          selectChannel: this.selectChannel,
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