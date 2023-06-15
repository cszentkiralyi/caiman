import m from 'mithril';

//import { App } from 'components';

const $$ = (sel, node) => (node || document).querySelectorAll(sel);
const $ = (sel, node) => (node || document).querySelector(sel);

class HelloWorld {
  constructor() {
    super();
  }

  view(vnode) {
    return (
      <div>Hello, world!</div>
    );
  }
}

m.render($('body'), <HelloWorld />);