
/**
 * @class AlphaComponent
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import i18n from "i18next";

import './style.css'

import FR_LOCALES from "./locales/fr.json";
import EN_LOCALES from "./locales/en.json";

export default class AlphaComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  constructor(props) {
    super(props);

    this.myRef = React.createRef();

    // charge le bundle fr s'il n'existe pas dans i18n
    if ( !i18n.hasResourceBundle( "fr", "namespace" ) ) {
      i18n.addResourceBundle( "fr", "namespace", FR_LOCALES );
    }
    // charge le bundle en s'il n'existe pas dans i18n
    if ( !i18n.hasResourceBundle( "en", "namespace" ) ) {
      i18n.addResourceBundle( "en", "namespace", EN_LOCALES );
    }
  }

  render() {
    const {
      text
    } = this.props;

    return (
      <div className="alpha" ref="test">
        Alpha Component: {text}.<br />
        Localization: {i18n.t("namespace:key_of","i18n_error")}
      </div>
    )
  }
}