<img src="./src/assets/icon.svg" style="height:10rem; width:10rem">

Caiman
======

Caiman is a [kbin.social](https://kbin.social) mobile interface.

Keep your expectations low. It's just a single web page.

## Dev info

Run a local dev build with the `dev` script:

    $ npm run dev

If Parcel's HMR (hot module reload) screws up on your end, there is also `dev-no-hmr` for running a dev server without it. Either way, `localhost:1234` should be serving the app.

For release, we have `build`:

    $ npm run build

- Developed on Node v10 with NPM, but either or both may be flexible, I don't know
- Tech stack
  - Parcel for build tooling, it handles development servers and minification and transpiling via Babel
  - Mithil is our React-lite, router, and XHR library

## Roadmap

My terminology is not exact, I'm not intimately familiar with how every fediverse uses "post" versus "comment" versus "microblog," "vote" or "like" or "boost," etc.

- [x] Get something vaguely app-like to show up
- [ ] Read-only look at the front page
- [ ] Read-only views of specific posts
- [ ] Read-only views of individual comments, microblogs, etc?
- [ ] Offline mode
- [ ] Light/dark modes, various settings
- [ ] Account login (singular), voting
- [ ] Post/comment/microblog creation

## Q&A

- **Is this ready for actual use?** No.
- **Why Caiman? This has nothing to do with lizards.** You're right, but consider that I think I'm funny. A kbin mobile interface could be abbreviated "kmin," which is also cleverly similar to "kbin" itself. And then you pronounce it like "caiman." That's all there is to it.
- **Why Mithril?** I know it since it's practically React, but it does more of what this app needs with less bytes of library. It basically boils down to the fact that I am lazy.
- **Why Parcel?** Same answer, except Parcel is akin to Webpack without any of the parts that make me want to scream.
- **Can I steal this?** Sure, the MIT license is one step away from "do whatever you want." I'd appreciate a shout-out but there's no money being made here, so feel free to fork and tinker and borrow and sell and solve world hunger with this code.

# Credits

- Icon courtesy of FreeSVG.org, SVG #188514, listed in the public domain as of 17 JUNE 2023