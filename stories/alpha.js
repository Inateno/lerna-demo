// stories/alpha.js
import React from 'react'
import {storiesOf} from '@storybook/react'
import {withInfo} from '@storybook/addon-info';

import Alpha from "../packages/alpha/dist";

// storiesOf crée une nouvelle entrée dans la liste a gauche, un peu comme un chapitre
// on va avoir tendance a utiliser storiesOf pour un composant
storiesOf('Alpha', module)
  // add ajoute un sous-item
  // on va avoir tendance a utiliser "add" pour toutes les version d'un composant
      // withInfo permet d'ajouter le petit "show info" en haut a droite
      // il est possible de lui passer des paramètres pour compléter la doc
  .add('default', withInfo(``)(() =>

    // notre composant est là, mais on pourrait très bien ajouter d'autres choses pour interragir avec ce composant
    <Alpha text="Coucou je suis le composant alpha" />
  ));