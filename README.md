# Albumklubben

Hosted at https://cupofjoakim.github.io/albumklubben/

This is a small weekend hack to show that it's easy to use a google spreadsheet as a backend for simpler projects. It takes some info from our spreadsheet for our listening club, makes a request to LastFM's api to get album information and shows it. Nothing major.

This was also a good opportunity for me to try out the context api and `useContext` as I hadn't had the opportunity via work earlier.

To be able to do this quickly I've made som sacrifices to make sure I didn't muck around with build settings or other stuff:

- No tests
- No eslint config
- No prettier config
- Plain css
- No usage of react-router, I manually read from the `week` param in `./src/util/index.js`
- The AlbumContext provider is real messy and needs some love
- Sub-par structure and unclear naming conventions on both folders and files

I might update this if it actually turns out to be something I like doing, but for now it's just laying here.
