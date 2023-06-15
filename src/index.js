import m from 'mithril';

const $ = (sel, node) => (node || document).querySelectorAll(sel);
const $$ = (sel, node) => (node || document).querySelector(sel);

m.render($$('body'), "Hello, world!");