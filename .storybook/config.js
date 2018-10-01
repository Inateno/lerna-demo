import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import './storybook.css';

import i18n from "i18next";

i18n.init({
    lng: 'en',
    fallbackLng: ['en'],
    fallbackOnNull: true,
    fallbackOnEmpty : true,
    returnNull: false,
    returnEmptyString: false,
    debug: true,
    resources: {
    }
  }, () => {
});

addDecorator((story) => 
    <div style={{padding:"10px"}}>
        {story()}
    </div>
);

function loadStories () {
    require('glob-loader!./stories.pattern')
}
configure(loadStories, module);