import m from 'mithril';
import Hammer from 'hammerjs';

import Api from './lib/api.js';
import Mock from './lib/mock.js';
import { State, Actions } from './lib/state.js';


class App {
  constructor() {
    let state = this.state = State();

    Api.Get('posts')
      .then(
        (resp) => console.log(resp),
        (err) => Actions.addToast(state, { error : err  })
      );
  }

  view() {
    let state = this.state;
    return (
      <div class="h-full w-full flex flex-col bg-0">
        <Toast state={state} />
        <HeaderBar state={state} />
        <div class="flex-grow">
          <ContentList state={state} />
        </div>
      </div>
    );
  }
}

class HeaderBar {
  view(vnode) {
    let logoSrc = new URL('assets/icon.svg', import.meta.url);
    return (
      <div class="w-full flex border-b border-color-1 bg-1">
        <div class="flex-grow" />
        <div class="flex items-center py-2">
          <img src={logoSrc} alt="Caiman logo" style={{ height: '2rem', width: '2rem' }} />
        </div>
        <div class="flex-grow" />
      </div>
    );
  }
}

class ContentList {
  view(vnode) {
    return (
      <div class="h-full overflow-auto">
        <ContentCard />
      </div>
    );
  }
}

class ContentCard {
  view(vnode) {
    return (
      <div class="p-4 m-4 bg-1 rounded shadow border border-color-1">
        <div class="mb-2 font-weight-bold">Card title</div>
        <div class="text-sm">Card text! In theory this could go on for a while but who really knows.</div>
      </div>
    );
  }
}

class Overlay {
  view({ attrs, children }) {
    let overlayClass = 'absolute inset-x-0 inset-y-0 pointer-events-none';
    return (
      <div class={overlayClass}>
        {children}
      </div>
    );
  }
}

class Toast {
  onupdate({ attrs, dom }) {
    if (dom && !this.hammertime) {
      this.hammertime = new Hammer(dom, {});
      this.hammertime.on('swipe', (e) =>  {
        this.close(attrs.state);
        m.redraw(); // Must be done manually since Mithril doesn't know about Hammer
      });
    } else {
      this.hammertime = null;
    }
  }

  view({ attrs }) {
    let state = attrs.state;
    if (state.toasts && state.toasts.length > 0) {
      let toast = state.toasts[0];
      let toastIcon = null, toastTitle = null, toastContent = null;

      if ('error' in toast) {
        toastTitle = (toast.error.message && toast.error.message !== 'null')
          ? toast.error.message
          : "Unknown error";
        toastContent = (
            <pre class="text-xs overflow-auto">{toast.error.stack}</pre>
        );
      } else if ('msg' in toast) {
        toastContent = (<div>{toast.msg}</div>);
      }

      // TODO: support toastIcon
      return (
        <Overlay>
          <div
            class="absolute inset-x-0 rounded bg-1 border border-color-1 shadow mx-8 p-4 text-sm pointer-events-auto"
            style={{ bottom: "5rem " }}
            >
              {toastTitle ? (<div class="font-weight-bold">{toastTitle}</div>) : null}
              {toastContent ? (<div>{toastContent}</div>) : null}
          </div>
        </Overlay>
      );
    } else {
      return null;
    }
  }

  close(state) {
    Actions.dropToast(state);
  }
}

module.exports = {
  App, HeaderBar, ContentList
};