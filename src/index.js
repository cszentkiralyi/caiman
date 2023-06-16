import m from 'mithril';

import { App } from './components.js';

let root = document.body.querySelector('#app');
m.mount(root, App);