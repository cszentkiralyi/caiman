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
      <div class="w-full flex p-2">
        <div class="flex-grow" />
        <strong>Caiman</strong>
        <div class="flex-grow" />
      </div>
    );
  }
}

class ContentList {
  view(vnode) {
    return (
      <div class="h-full bg-0">Hello!</div>
    );
  }
}

module.exports = {
  App, HeaderBar, ContentList
};