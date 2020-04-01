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

module.exports = getMediaBySlug;
