import React, { Component } from 'react';
import { Consumer } from './Context';

const axios = require('axios');

class ChannelMessage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: props.message
    };
  }

  componentDidMount() {
  }


  render() {
    return (
      // <Consumer>
      //   {({ actions, channels }) => {
      //       if(channels.selectChannel){
      //         console.log(channels.channels);
      //         return (
      //           <ol>
      //             {channels[channels.selectChannel - 1].message.map((item, index) =>
      //               <li key={item + index}>{item}</li>
      //             )}
      //           </ol>
      //         )
      //     }
      //   }}
      // </Consumer>
        <ol>
          {this.props.message.map(a => (
            <li>{a}</li>
          ))}
        </ol>
    );
  }
}

export default ChannelMessage;