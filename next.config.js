
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['4k5VUvYN9ByL8a1GrrWDBZ'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  