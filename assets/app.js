//import commenté pour npm run watch
//import './stimulus_bootstrap.js';
import "bootstrap";

/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.scss';
import { createApp } from 'vue' 

createApp({
  data() {
    return {
      compteur: 0
    };
  }
}).mount('#app');
