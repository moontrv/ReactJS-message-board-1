import React from 'react';
import { Consumer } from './Context';

const AddMessageForm = () => {

  const channelInput = React.createRef();

  return (
    <Consumer>
      { ({ actions }) => {
        const handleSubmit = (e) => {
          e.preventDefault();
          actions.addchannel(channelInput.current.value);
          e.currentTarget.reset();
        }

        return (
          <form onSubmit={handleSubmit}>
            <input 
              type="text"
              ref={channelInput}
              placeholder="Enter channel name"
            />
            
            <button 
              type="submit"
              value="Add Channel"
            />
          </form>
        );
      }}
    </Consumer>
  );
}

export default AddMessageForm;