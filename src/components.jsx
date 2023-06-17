import m from 'mithril';

import Api from './lib/api.js';

import Mock from './lib/mock.js';

class App {
  constructor() {
    try {
      Mock.Api.Get('posts')
        .then((resp) => console.log(resp));
    } catch (err) {
      console.log(err);
    }
  }

  view(vode) {
    return (
      <div class="h-full w-full flex flex-col bg-0">
        <HeaderBar />
        <div class="flex-grow">
          <ContentList />
        </div>
      </div>
    );
  }
}

class HeaderBar {
  view(vnode) {
    return (
      <div class="w-full flex border-b border-color-1 bg-1">
        <div class="flex-grow" />
        <div class="py-4">
          <strong>Caiman</strong>
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

module.exports = {
  App, HeaderBar, ContentList
};