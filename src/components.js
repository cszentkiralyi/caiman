import m from 'mithril';

class App {
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
      <div class="w-full flex border-b border-color-0 bg-1">
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
      <div class="h-full overflow-auto py-2">
        <ContentCard />
      </div>
    );
  }
}

class ContentCard {
  view(vnode) {
    return (
      <div class="p-4 m-4 bg-1 rounded shadow">
        <div class="mb-2 text-bold">Card title</div>
        <div class="text-sm">Card text! In theory this could go on for a while but who really knows.</div>
      </div>
    );
  }
}

module.exports = {
  App, HeaderBar, ContentList
};