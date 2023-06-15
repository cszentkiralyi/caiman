import m from 'mithril';

//import { App } from 'components';

const $$ = (sel, node) => (node || document).querySelectorAll(sel);
const $ = (sel, node) => (node || document).querySelector(sel);

function Hello() {
    return {
        view: () => (
            <div>Hello, world!</div>
        )
    };
}

m.render($('body'), <Hello />);