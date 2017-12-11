import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Channel from './Channel';

class ChannelList extends PureComponent {
  render() {
    return (
      <ul>
        {this.props.channels.map(chan => <Channel channel={chan} key={chan.id} {...this.props} />)}
      </ul>
    );
  }
}

ChannelList.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired,
  activeChannel: PropTypes.object.isRequired,
};

export default ChannelList;
