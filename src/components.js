import m from 'mithril';

class App {
  view(vode) {
    return (
      <div class="h-full w-full flex flex-col">
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
      <div class="w-full flex">
        <div class="flex-grow" />
        <div class="p-2">
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
      <div class="h-full overflow-auto bg-0">
        <ContentCard />
      </div>
    );
  }
}

class ContentCard {
  view(vnode) {
    return (
      <div class="p-4 mx-4 my-2 bg-1 rounded shadow">
        Card text!
      </div>
    );
  }
}

module.exports = {
  App, HeaderBar, ContentList
};