
/**
 * @class AlphaComponent
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AlphaComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }

  render() {
    const {
      text
    } = this.props;

    return (
      <div ref="test">
        Alpha Component: {text}
      </div>
    )
  }
}