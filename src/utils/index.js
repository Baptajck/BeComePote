/* eslint-disable import/prefer-default-export */
const slugify = require('slugify');

const getSlugByName = (name) => slugify(name, {
  remove: /[*+~.()'"!:@]/g,
  lower: true,
});

const getMediaBySlug = (medias, slug) => {
  const searchedMedia = medias.find((media) => getSlugByName(media.name) === slug);
  return searchedMedia;
};

// Permet de split l'url pour recupèrer une données dedans
// const splitURL = () => {
//   const url = document.location.hash;
//   const a = url.split('/');
//   const n = Number(a[2]);
//   return n;
// };
module.exports = getMediaBySlug;
