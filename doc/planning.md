# kbin.social mobile client

## Stack
- Mithril for client-side rendering, routing, XHR; using JSX
- Parcel for all the dev tools
- Shitty Tailwind for CSS?
- Find a free icon font -- FontAwesome? idk
- Worker for offline/"install" capabilities
- Need a reactive state library, maybe? maybe not...

## Architecture

### API approach
- Account data stored in localStorage? IndexDB? idk
- Everything else loads on-demand

### Component planning
- App (tree)
  - Header
  - List<Content>
  - Footer (???)
- Content (union)
  - Card, individual post or direct comment
  - Tree<Comment>
- Comment (type, dbtype) {
    key, parent, partition_parent, user, source, summary, content, created, edited?, 
  }
- Header (tree), left to right
  - Sidebar hamburger menu
  - Back button?
  - Logo
  - User/settings menu
- Sidebar (type) {
    side, content
  }

## General thoughts

- In-app link to GH issues
- Settings thoughts
  - Image loading: on scroll (tap to cancel/reload), on tap
  - Reload on launch (can I detect this?)
  - Light/dark theme
  - Card layouts: big/small images, prominent user/source/neither
  - Comment layouts: compact/spacious, inline images?

## Roadmap

- [ ] Set up project & dependencies
- [ ] Get app skeleton up and running: index page, basic components rendering, spin up a worker
- [ ] Framework implementation
  - [ ] Content components
  - [ ] Navigation
  - [ ] Sidebars