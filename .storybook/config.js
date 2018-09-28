import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import './storybook.css';

addDecorator((story) => 
    <div style={{padding:"10px"}}>
        {story()}
    </div>
);

function loadStories () {
    require('glob-loader!./stories.pattern')
}
configure(loadStories, module);