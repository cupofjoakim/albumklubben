// Please don't use this :(
const PUBLIC_KEY = "2729fff6586466b0db95b377fc7597c3";
const BASE_URL = "https://ws.audioscrobbler.com/2.0/";

const buildParams = (method, album, artist, autoCorrect = 1) =>
  `?method=${method}&album=${album}&artist=${artist}&autocorrect=${autoCorrect}&api_key=${PUBLIC_KEY}&format=json`;

const findYearInTags = tags => {
  const matchingTags = tags.filter(
    tag => /^\d+$/.test(tag.name) && tag.name.length === 4
  );
  return matchingTags[0].name;
};

const convertToAlbum = ({ name, artist, url, image, tracks, tags }) => ({
  name,
  artist,
  urls: [{ type: "lastfm", url }],
  tracks,
  year: findYearInTags(tags.tag),
  image: image.length > 0 ? image[image.length - 1]["#text"] : null
});

const getAlbumByNameAndArtist = async (album, artist) => {
  if (!album || !artist)
    throw new Error("Both album and artist needs to be passed");

  const body = buildParams("album.getInfo", album, artist);
  return fetch(BASE_URL + body).then(async res => {
    if (!res.ok) throw new Error("Unable to get album data!");
    const response = await res.json();
    return convertToAlbum(response.album);
  });
};

export { getAlbumByNameAndArtist };
