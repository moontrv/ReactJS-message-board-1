import React from 'react';
import { Consumer } from './Context';

const AddMessageForm = ({index}) => {

  const channelInput = React.createRef();

  return (
    <Consumer>
      { ({ actions }) => {
        const handleSubmit = (e) => {
          e.preventDefault();
          if(channelInput.current.value){
            actions.addMessage(channelInput.current.value, index);
          }         
          e.currentTarget.reset();
        }

        return (
          <form onSubmit={handleSubmit}>
            <input 
              type="text"
              ref={channelInput}
              placeholder="Enter message body"
            />
            
            <input 
              type="submit"
              value="Add Message"
            />
          </form>
        );
      }}
    </Consumer>
  );
}

export default AddMessageForm;