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